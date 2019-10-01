import React from 'react';
import { connect } from 'react-redux';
import Categories from '../MainPage/Categories';

import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import 'react-s-alert/dist/s-alert-css-effects/genie.css';

import {
    contentStyle,
    detailAreaStyle,
    postTitleStyle,
    categoryBagesStyle,
    cardDateStyle,
    backButtonStyle,
    buttonContainer,
    deleteButtonStyle
} from './Style';

import {
    Button
} from 'react-bootstrap';

import {
    getBlogPostsAct,
    deletePostAct
} from '../../redux/actions';

import {
    getBlogPostsSlc
} from '../../redux/selectors';

class PostDetails extends React.Component {
    constructor() {
        super();

        this.handleGoBack = this.handleGoBack.bind(this);
        this.handleDeleteBlogPost = this.handleDeleteBlogPost.bind(this);
    }

    componentDidMount() {
        const {
            getBlogPostsAct
        } = this.props;

        getBlogPostsAct();
    }

    handleGoBack = () => {
        window.location.href = document.referrer;
    };

    handleDeleteBlogPost = postId => {
        const {
            deletePostAct
        } = this.props;

        let id = parseInt(postId);

        deletePostAct(id);

        Alert.success("Blog post deleted successfully.", {
            position: "bottom-right",
            effect: "slide",
            timeout: 3000
        });

        setTimeout(function(){ window.location.href = "/"; }, 3000);
    };

    render() {
        const {
            getBlogPostsSlc
        } = this.props;

        let selectedPost = {};
        let currentURL = window.location.href;
        let postId = currentURL.split("/").slice(-1)[0];

        for (let post of getBlogPostsSlc) {
            if (post.id === parseInt(postId)) {
                selectedPost = post;
            }
        }

        return(
            <div style={detailAreaStyle}>
                <div className="container">
                    <div style={buttonContainer}>
                        <Button
                            type="button"
                            style={backButtonStyle}
                            className="btn btn-sm btn-primary"
                            onClick={() => this.handleGoBack()}
                        > Go Back </Button>
                    </div>
                    <div style={deleteButtonStyle}>
                        <Button
                            type="button"
                            style={backButtonStyle}
                            className="btn btn-sm btn-danger"
                            onClick={() => this.handleDeleteBlogPost(postId)}
                        > Delete </Button>
                    </div>
                    <div className="col-sm-12">
                        <h2 style={postTitleStyle}>{selectedPost.title}</h2>
                        <p style={cardDateStyle}>{selectedPost.date}</p>
                        <div style={categoryBagesStyle}>
                            {selectedPost.categories
                                ? selectedPost.categories.map((categoryItem, index) => (
                                    <Categories key={index} categoryItem={categoryItem}/>
                                ))
                                : null}
                        </div>
                        <div>
                            <p style={contentStyle}>
                                {selectedPost.content}
                            </p>
                        </div>
                    </div>
                </div>
                <Alert stack={{ limit:1 }}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    getBlogPostsSlc: getBlogPostsSlc(state)
});
const mapDispatchToProps = {
    getBlogPostsAct,
    deletePostAct
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostDetails);
