/**
 * User: Daisy
 * Date: 2018/12/7
 * Time: 13:18
 */
import React, { Component } from 'react';
import OrderItem from '../OrderItem';

    // const data = {
    //     id : 1,
    //     shop: '小柴米',
    //     picture: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544172939888&di=bf2826f7cfc9a4261518a7a9220a154d&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D1493132467%2C2236924863%26fm%3D214%26gp%3D0.jpg',
    //     product: '百果香 (冷饮) 1扎',
    //     price: 19.9,
    //     ifCommented: true,
    // };

// const data = [
//     {
//         id : 1,
//         shop: '小柴米',
//         picture: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544172939888&di=bf2826f7cfc9a4261518a7a9220a154d&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D1493132467%2C2236924863%26fm%3D214%26gp%3D0.jpg',
//         product: '百果香 (冷饮) 1扎',
//         price: 19.9,
//         ifCommented: true,
//     },
//     {
//         id : 2,
//         shop: '小柴米',
//         picture: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544172939888&di=bf2826f7cfc9a4261518a7a9220a154d&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D1493132467%2C2236924863%26fm%3D214%26gp%3D0.jpg',
//         product: '百果香 (冷饮) 1扎',
//         price: 19.9,
//         ifCommented: false,
//     },
//     {
//         id : 3,
//         shop: '小柴米',
//         picture: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544172939888&di=bf2826f7cfc9a4261518a7a9220a154d&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D1493132467%2C2236924863%26fm%3D214%26gp%3D0.jpg',
//         product: '百果香 (冷饮) 1扎',
//         price: 19.9,
//         ifCommented: true,
//     },
// ];
export default class OrderList extends Component {
    state = {
        data: [],
    };
    componentDidMount(){
        fetch('/mock/order.json').then(res => {
            if(res.ok){
                res.json().then(data => {
                    this.setState({ data: data});
                });
            }
        });
    }
    handleSubmit = (id, comment, stars) =>{
        // fetch('/saveComment').then((res) => {});
        const newData = this.state.data.map(item => {
            return item.id === id ?
            {
                ...item,
                comment,
                stars,
                ifCommented: true,
            } : item
        });
        this.setState({ data: newData });
    };
    render(){
        return (
            <div>
                {
                    // data.map(item => {
                    //     return <OrderItem key={item.id} data={item}/>
                    // })
                    
                    this.state.data.map(item => {
                        return <OrderItem
                            key={item.id}
                            data={item}
                            onSubmit={this.handleSubmit}/>
                    })
                }
            </div>
        );
    }
}