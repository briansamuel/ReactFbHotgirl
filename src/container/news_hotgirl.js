import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchHotgirls } from '../actions/index';
class NewsHotgirl extends Component {
	
  componentDidMount() {
	
	this.props.fetchHotgirls();
  }
  renderPosts() {
	return _.map(this.props.hotgirls, post => {
		let url_post = `${post.post_slug}.html`;
		return (
			
			<div className="item" key={post.id}>
				<div className="item-inner" >
					<div className="left-content">
						<div className="thumb">
						<a href={url_post} title={post.post_title} style={{backgroundImage: 'url('+post.post_thumbnail+')', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} />
						</div>
					</div>
					<div className="right-content">
					<h3><a href={url_post} title={post.post_title}>{post.post_title}</a></h3>
					<div className="meta-item">
						<span className="byline vcard item-author"><span className="fn"><span><i aria-hidden="true" className="fa fa-user-circle" /> {post.post_author}</span></span>
						</span>
						<span className="byline post-date">
						<time className="published" dateTime={post.created_at} title={post.created_at}><i aria-hidden="true" className="fa fa-clock-o" /> {post.created_at}</time>
						</span>
					</div>
					<p>{post.post_description}</p>
		            </div>
	            </div>
            </div>
		);
	});
  }
  render() {
    return (
      <div className="featured-post style-2" key="news_hotigrl"  data-title="Hot Girl Facebook">
      		{this.renderPosts()}
      </div>
    );
  }
}
function mapStateToProps(state) {
	return {hotgirls: state.hotgirls};
}
export default connect(mapStateToProps, {fetchHotgirls})(NewsHotgirl);
