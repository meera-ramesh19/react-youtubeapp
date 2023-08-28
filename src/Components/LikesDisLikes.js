import React, { Component } from 'react';

class LikesDisLikes extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			like: 100,
			dislike: 20,
			likeactive: false,
			dislikeactive: false,
			
		}
	}

	handleLike = () => {
		const { like,dislike, likeactive, dislikeactive } = this.state;
		
		if (likeactive) {
			this.setState({
				like: this.state.like - 1,
				likeactive: false
			})
		} else {
			this.setState({
				like: this.state.like + 1,
				likeactive: true
			})
			if ( dislikeactive) {
				this.setState({
					like: this.state.like + 1,
					dislike: this.state.dislike - 1,
					dislikeactive: false
				})
			}
		}
		
		
	  
	}
	
	handleDislike = () => {
		const { like, dislike, likeactive, dislikeactive } = this.state;
		
		if (dislikeactive) {
			this.setState({
				like: this.state.like -1,
				likeactive: false
			})
		} else {
			this.setState({
				like: this.state.like+ 1,
				likeactive: true
			})
			if ( likeactive) {
				this.setState({
					like: this.state.like + 1,
					dislike: this.state.dislike - 1,
					dislikeactive: false
				})
			}
		}
		
		
	  
	}
	
	render() {
		const { like, dislike, likeClass, dislikeClass, activeBtn} = this.state;
		
		return (
			<div>
				<button
					type="button"
					className={likeClass ? "like-button liked" : "like-button"}
					
                    onClick={this.handleLike}
				>
					<span>{like}</span> Like
				</button>
				<button
					type="button"
					className={dislikeClass ? "dislike-button disliked" : "dislike-button"}
			
                    onClick={this.handleDislike}
					
				>
					<span>{dislike}</span> Dislike
				</button>
			</div>
		)
	}
}
export default LikesDisLikes