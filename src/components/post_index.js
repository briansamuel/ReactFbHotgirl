import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
import NewsHotgirl from '../container/news_hotgirl';
import NewsUpdate from '../container/news_update';
class PostIndex extends Component {
	
  
  render() {
    return (

      	<div className="widget Blog" data-version="2" id="Blog1">
      		<div className="recent-title"><h2><span>Hotgirl Facebook</span></h2></div>
			   <NewsHotgirl />
			   <div className="recent-title"><h2><span>Mới Cập Nhập</span></h2></div>
			   <NewsUpdate />
        </div>
    );
  }
}

export default (PostIndex);
