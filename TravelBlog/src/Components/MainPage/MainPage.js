import React from 'react';
import {connect} from 'react-redux';
import Card from './Card/Card';

import {
    searchStyle,
    searchInputStyle,
    searchButtonStyle,
    mainAreaStyle
} from './Style';

import {
    getBlogPostsAct,
    setSearchInputAct,
    setFilteredBlogPostsAct,
    clearFilteredBlogPostsAct
} from '../../redux/actions';

import {
    getBlogPostsSlc,
    getSearchInputSlc,
    getFilteredBlogPostsSlc
} from '../../redux/selectors';

import {
    Button,
    Form,
    FormControl
} from 'react-bootstrap';

class MainPage extends React.Component {

    constructor() {
        super();

        this.handleSearchInput = this.handleSearchInput.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    componentDidMount() {
        const {
            getBlogPostsAct,
            clearFilteredBlogPostsAct
        } = this.props;

        getBlogPostsAct();
        clearFilteredBlogPostsAct();
    }

    handleSearchInput = (e) => {
        const {
            setSearchInputAct,
            clearFilteredBlogPostsAct
        } = this.props;

        setSearchInputAct(e.target.value);
        clearFilteredBlogPostsAct();
    };

    handlePageChange = (e) => {
        console.log(e);

    };

    handleSearch = () => {
        const {
            getSearchInputSlc,
            getBlogPostsSlc,
            setFilteredBlogPostsAct,
            clearFilteredBlogPostsAct
        } = this.props;

        let filteredBlogPosts = [];
        let count = 0;

        if (getBlogPostsSlc.length > 0) {
            for (let blogPost of getBlogPostsSlc) {
                let includesFlag = blogPost.content.indexOf(getSearchInputSlc) > -1;
                if (includesFlag) {
                    filteredBlogPosts.push(blogPost);
                    setFilteredBlogPostsAct(filteredBlogPosts);
                } else {
                    count++;
                }
            }
            //if there are no posts matching selected tags, clear the view
            if (count === getBlogPostsSlc.length) {
                clearFilteredBlogPostsAct();
            }
        }
    };

    cardViewAll = () => {
        const {
            getBlogPostsSlc,
            getSearchInputSlc,
            getFilteredBlogPostsSlc
        } = this.props;

        let items = [];
        let tempPosts = [];

        if (getSearchInputSlc.length > 0 && getFilteredBlogPostsSlc.length > 0) {
            tempPosts = getFilteredBlogPostsSlc;
        } else {
            tempPosts = getBlogPostsSlc;
        }

        //create a card collection for each blog post
        for (const [index, blogItem] of tempPosts.entries()) {
            items.push(
                <Card
                    key={index}
                    cardId={blogItem.id}
                    cardDate={blogItem.date}
                    cardImage={blogItem.image}
                    cardTitle={blogItem.title}
                    cardContent={blogItem.content}
                    cardCategories={blogItem.categories}
                />
            );
        }

        return items;
    };

    renderSpinner = () => {
        const {
            getBlogPostsSlc
        } = this.props;

        //Adding spinner while fetching existing blog posts
        if(getBlogPostsSlc.length === 0) {
            return (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    };

    render() {
        return (
            <div style={mainAreaStyle}>
                <div className="container">
                    <div style={searchStyle}>
                        <Form className="form-inline my-2 my-lg-0">
                            <FormControl
                                type="text"
                                placeholder="Search content..."
                                className="form-control"
                                style={searchInputStyle}
                                onChange={(e) => this.handleSearchInput(e)}/>
                            <Button
                                className="btn btn-success my-2 my-sm-0"
                                style={searchButtonStyle}
                                onClick={() => this.handleSearch()}
                            >
                                Search
                            </Button>
                        </Form>
                    </div>
                    {this.renderSpinner()}
                    <div className="row">
                        {this.cardViewAll()}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    getBlogPostsSlc: getBlogPostsSlc(state),
    getSearchInputSlc: getSearchInputSlc(state),
    getFilteredBlogPostsSlc: getFilteredBlogPostsSlc(state)
});
const mapDispatchToProps = {
    getBlogPostsAct,
    setSearchInputAct,
    setFilteredBlogPostsAct,
    clearFilteredBlogPostsAct
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPage);
