import React from 'react';
import { connect } from 'react-redux';
import Card from '../MainPage/Card';
import Select from 'react-select';

import {
    tagSearchLabelStyle,
    categoryContainerStyle
} from './Style';

import {
    getBlogPostsAct,
    setFilteredBlogPostsAct,
    clearFilteredBlogPostsAct
} from '../../redux/actions';

import {
    getSelectedPostIdSlc,
    getBlogPostsSlc,
    getFilteredBlogPostsSlc
} from '../../redux/selectors';

class Categories extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        // const {
        //     getBlogPostsAct,
        //     clearFilteredBlogPostsAct
        // } = this.props;

        //getBlogPostsAct();
        // clearFilteredBlogPostsAct();
    }

    categoriesCollection = () => {
        const {
            getBlogPostsSlc
        } = this.props;

        let categoryItems = [];
        // let reducedCategoryItems = [];

        //to set components width to align
        const colourStyles = {
            container: (styles) => {
                return {
                    ...styles,
                    width: '100%'
                };
            }
        };

        //collect all existing category tags
        for (const [index, blogItem] of getBlogPostsSlc.entries()) {
            categoryItems = categoryItems.concat(blogItem.categories);
        }

        //remove the same tags to have unique values
        categoryItems = [...new Set(categoryItems)];

        // for (let tag of categoryItems) {
        //     let temp = {
        //         value: tag,
        //         label: tag
        //     };
        //     reducedCategoryItems.push(temp);
        // }

        const reducedCategoryItems = categoryItems.map(tag => {
            return {
                value: tag,
                label: tag
            }
        });


        return(
            <Select
                //defaultValue={[reducedCategoryItems[2], reducedCategoryItems[0]]}
                isMulti
                name="colors"
                options={reducedCategoryItems}
                className="basic-multi-select"
                classNamePrefix="select"
                styles={colourStyles}
                onChange={this.handleChange}
            />
        );
    };

    handleChange = selectedOption => {
        const {
            getBlogPostsSlc,
            setFilteredBlogPostsAct,
            clearFilteredBlogPostsAct
        } = this.props;

        let selectedTags = [];
        let filteredBlogPosts = [];

        //filter selected tags
        if(selectedOption !== null) {
            for (let option of selectedOption) {
                selectedTags.push(option.value)
            }
        } else {
            clearFilteredBlogPostsAct();
        }

        //check which posts includes selected tags
        if(getBlogPostsSlc.length > 0) {
            let count=0;
            for (let blogPost of getBlogPostsSlc) {
                let includesFlag = selectedTags.every(tag => blogPost.categories.indexOf(tag) > -1);
                if(includesFlag) {
                    filteredBlogPosts.push(blogPost);
                    setFilteredBlogPostsAct(filteredBlogPosts);
                } else {
                    count++;
                }
            }
            //if there are no posts matching selected tags, clear the view
            if(count === getBlogPostsSlc.length){
                clearFilteredBlogPostsAct();
            }
        }
    };

    filteredBlogPosts = () => {
        const {
            getFilteredBlogPostsSlc
        } = this.props;

        const items = [];

        //create a card collection for each blog post
        for (const [index, blogItem] of getFilteredBlogPostsSlc.entries()) {
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

    render() {
        return(
            <div style={categoryContainerStyle}>
                <div className="container">
                    <div className="row">
                        <h5 style={tagSearchLabelStyle}>Select Categories to Filter Blog Posts</h5>
                        {this.categoriesCollection()}
                        {this.filteredBlogPosts()}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    getSelectedPostIdSlc: getSelectedPostIdSlc(state),
    getBlogPostsSlc: getBlogPostsSlc(state),
    getFilteredBlogPostsSlc: getFilteredBlogPostsSlc(state)
});
const mapDispatchToProps = {
    getBlogPostsAct,
    setFilteredBlogPostsAct,
    clearFilteredBlogPostsAct
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Categories);
