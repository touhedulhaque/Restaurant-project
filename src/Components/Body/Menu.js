import React, { Component } from 'react';
import DishDetail from './DishDetail';
import MenuItem from './MenuItem';
import { CardColumns, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { addComment, fetchDishes } from '../../REDUX/actionCreators';
import Loading from '../Body/Loading/Loading';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addComment: (dishId, author, rating, comment) => dispatch(addComment(dishId, author, rating, comment)),

        fetchDishes: () => dispatch(fetchDishes())
    }
}

class Menu extends Component {
    state = {
        selectedDish: null,
        modalOpen: false
    }

    onDishSelect = dish => {
        // console.log(dish)
        this.setState({
            selectedDish: dish,
            modalOpen: !this.state.modalOpen
        });
        // this.toggleModal();
    }
    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }


    componentDidMount() {
        this.props.fetchDishes();
    }

    render() {
        document.title = "Menu"

        if (this.props.dishes.isLoading) {
            return (
                <div className="text-center mt-5 pt-5">
                    <Loading />
                </div>
            );
        }
        else {
            const menu = this.props.dishes.dishes.map((item) => {
                return (
                    <MenuItem
                        dish={item} key={item.id}
                        dishSelect={() => this.onDishSelect(item)}
                    ></MenuItem>
                )
            })

            let dishDetail = null;

            if (this.state.selectedDish != null) {
                const comments = this.props.comments.filter(comment => comment.dishId === this.state.selectedDish.id
                )
                dishDetail = <DishDetail
                    dish={this.state.selectedDish}
                    comments={comments}
                    addComment={this.props.addComment}
                ></DishDetail>

            }
            return (
                <div className="container pt-5 mt-5">
                    <div className="row pt-5 pb-5">
                        <CardColumns>
                            {menu}
                        </CardColumns>
                        <Modal isOpen={this.state.modalOpen}>
                            <ModalBody>
                                {dishDetail}
                            </ModalBody>
                            <ModalFooter>
                                <button onClick={this.toggleModal} className="btn btn-outline-danger" type="">X</button>
                            </ModalFooter>
                        </Modal>







                        {/* <div className="col-md-6">
                            {menu}
                        </div>
                        <div className="col-md-6">
                            {dishDetail}
                        </div> */}

                    </div>

                </div>
            );
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);