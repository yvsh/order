/**
 * User: Daisy
 * Date: 2018/12/7
 * Time: 13:18
 */
 import React, { Component } from 'react';
 import './style.css';
 export default class OrderItem extends Component {
    static defaultProps = {
    
    };
    state = {
        stars: this.props.data.stars || 0,
        editing: false,
        comment: this.props.data.comment || '',
    };
    render(){
        const { shop, product, price, picture, ifCommented } = this.props.data;
        return (
            <div className='orderItem'>
                <div className='orderItem_picContainer'>
                    <img className='orderItem_pic' src={picture}/>
                </div>
                <div className='orderItem_content'>
                    <div className='orderItem_product'>{product}</div>
                    <div className='orderItem_shop'>{shop}</div>
                    <div className='orderItem_detail'>
                        <div className='orderItem_price'>{price}</div>
                        <div>
                            {
                              ifCommented ?  <button className='orderItem_btn orderItem_btn--gray'>已评价</button> :
                              <button className='orderItem_btn orderItem_btn--red' onClick={()=>{this.setState({editing:true})}}>评价</button>
                            }
                        
                        </div>
                    </div>
                </div>
                {
                    this.state.editing && this.renderEditArea()
                }
            </div>
        )
    }
    
    renderEditArea(){
        return (
            <div className='orderItem_commentContainer'>
                <textarea className='orderItem_comment'
                    onChange={this.handleCommentChange}
                    value={this.state.comment}
                />
                {this.renderStars()}
                <button className='orderItem_btn orderItem_btn--red' onClick={this.handleSubmitComment}>提交</button>
                <button className='orderItem_btn orderItem_btn--gray' onClick={this.handleCancelClick}>取消</button>
            </div>
        )
    }
    renderStars(){
        const { stars } = this.state;
        return (
            <div>
                {
                    [1,2,3,4,5].map((item,index) => {
                        const light = stars >= item ? "orderItem_star--light" : "orderItem_star";
                        return <span key={index} className={light} onClick={this.handleStarClick.bind(this,item)}>★</span>
                    })
                }
                
            </div>
        )
    }
     handleStarClick = (stars) => {
        this.setState({
            stars:stars
        })
    }
    //; handleCommentClick = () => {
    //     this.setState({
    //         editing: true,
    //     })
    // }
    handleCommentChange = (e) =>{
        this.setState({ comment: e.target.value })
    };
    handleCancelClick = () =>{
        this.setState({
            editing: false,
            stars: this.props.data.stars || 0,
            comment: this.props.data.comment || '',
        });
    }
     handleSubmitComment = () => {
        const { stars, comment } = this.state;
        const { id } = this.props.data;
        this.setState({
            editing:false
        })
        this.props.onSubmit(id,stars,comment)
    }
 }