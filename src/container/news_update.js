import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts , fetchPostsMore } from '../actions/index';
import InfiniteScroll from 'react-infinite-scroll-component';
class NewsUpdate extends Component {
	constructor(props) {
        super(props);

        this.state = {
        	page: 1,
            hasMoreItems: true,
        };
    }	
  	componentDidMount() {
	
		this.props.fetchPosts();
  	}
  	renderPosts() {
		return _.map(this.props.posts, post => {
			let url_post = `${post.post_slug}.html`;
			return (
				<article className="post" key={post.id}>
					<a href={url_post} title={post.post_title}>
						 <div className="image">
						 	<img alt="post image" src={post.post_thumbnail} />
						 </div>
					</a>
					<h3 className="title">{post.post_title}</h3>
					<div className="action-buttons">
			            <span className="zoom-it cboxElement" data-href="{post.post_thumbnail}" data-placement="bottom" data-toggle="tooltip" data-original-title="Zoom">
			              <i aria-hidden="true" className="fa fa-picture-o" /></span>
			          </div>
				</article>
			);
		});
  	}
  	loadMorePost() {
		this.props.fetchPostsMore(this.state.page);
		if(this.state.page > 5)
		{
			this.setState({
				hasMoreItems: false,
			});
		}
		let new_page = this.state.page + 1;
		this.setState({
			page: new_page,
		});
		
		
  	}
  	render() {
  		const loader = <div className="loader"  key={1}>Loading ...</div>;
    	return (
    		
	    	<InfiniteScroll
	        pageStart={1}
	        loadMore={this.loadMorePost.bind(this)}
	        hasMore={this.state.hasMoreItems}
	        loader={loader}
	        useWindow={false}
		    >
		        <div className="hfeed grid-posts grid-posts">
		      		{this.renderPosts()}
		      	</div>
		    </InfiniteScroll>
    	);
  	}
}
function mapStateToProps(state) {
	
	return {posts: state.posts};
	
}
export default connect(mapStateToProps, {fetchPosts,fetchPostsMore})(NewsUpdate);
