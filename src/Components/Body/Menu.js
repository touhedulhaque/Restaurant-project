import React, { Component } from 'react';
import DISHES from '../../Data/Dish/dishes';
import DishDetail from './DishDetail';
import MenuItem from './MenuItem';

class Menu extends Component {
    state = {
        dishes: DISHES,
        selectedDish: null
    }

    onDishSelect = dish => {
        console.log(dish)
        this.setState({ selectedDish: dish })
    }
    render() {
        const menu = this.state.dishes.map((item) => {
            return (
                <MenuItem
                    dish={item} key={item.id}
                    dishSelect={() => this.onDishSelect(item)}
                ></MenuItem>
            )
        })

        let dishDetail = null;

        if (this.state.selectedDish != null) {
            dishDetail = <DishDetail
                dish={this.state.selectedDish}
            ></DishDetail>

        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        {menu}
                    </div>
                    <div className="col-md-6">
                        {dishDetail}
                    </div>

                </div>

            </div>
        );
    }
}

export default Menu;