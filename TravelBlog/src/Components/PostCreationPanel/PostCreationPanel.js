import React from 'react';
import { connect } from 'react-redux';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';

import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import 'react-s-alert/dist/s-alert-css-effects/genie.css';

import {
    Button,
    Form,
    FormControl
} from 'react-bootstrap';

import {
    submitStyle,
    formStyle,
    labelStyle,
    formTitle,
    tagAreaStyle,
    tagTextStyle,
    creationAreaStyle
} from './Style';

import {
    getBlogPostsAct,
    setPostTitleAct,
    setPostContentAct,
    setPostCategoriesAct,
    saveBlogPostAct,
    resetBlogFormAct,
    setAlertMessageAct,
    uploadImageAct
} from '../../redux/actions';

import {
    getSelectedPostIdSlc,
    getBlogPostsSlc,
    getPostTitleSlc,
    getPostContentSlc,
    getPostCategoriesSlc,
    getAlertMessageSlc,
    isErrorMessageSlc
} from '../../redux/selectors';

class PostCreationPanel extends React.Component {
    constructor() {
        super();

        this.state = {
            selectedFile: null
        };

        this.handleCreatePost = this.handleCreatePost.bind(this);
        this.handleTagChange = this.handleTagChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
        this.handleResetForm = this.handleResetForm.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    componentDidMount() {
        // const {
        //     getBlogPostsAct
        // } = this.props;
        //
        // getBlogPostsAct();
    }

    handleTitleChange = (e) => {
        const { setPostTitleAct } = this.props;
        setPostTitleAct(e.target.value);
    };

    handleContentChange = (e) => {
        const { setPostContentAct } = this.props;
        setPostContentAct(e.target.value);
    };

    handleTagChange = (e) => {
        const { setPostCategoriesAct } = this.props;
        setPostCategoriesAct(e);
    };

    onChangeHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        });
    };

    handleCreatePost = () => {
        const {
            getPostTitleSlc,
            getPostContentSlc,
            getPostCategoriesSlc,
            saveBlogPostAct,
            getBlogPostsSlc,
            uploadImageAct
        } = this.props;

        if(getPostTitleSlc.length === 0) {
            Alert.error("Title can not be empty!", {
                position: "bottom-right",
                effect: "slide",
                timeout: 3000
            });
        } else if (getPostCategoriesSlc.length === 0) {
            Alert.error("Categories can not be empty!", {
                position: "bottom-right",
                effect: "slide",
                timeout: 3000
            });
        } else if (getPostContentSlc.length === 0) {
            Alert.error("Content can not be empty!", {
                position: "bottom-right",
                effect: "slide",
                timeout: 3000
            });
        } else {
            let lastPost = getBlogPostsSlc.pop();

            const monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];

            let date = new Date();
            let day = date.getDay();
            let month = date.getMonth();
            let year = date.getFullYear();

            let postDate = day + " " + monthNames[month] + ", " + year;

            let selectedImage = this.state.selectedFile;

            console.log(selectedImage);

            let blogPost = {
                id: lastPost.id + 1,
                date: postDate,
                categories : getPostCategoriesSlc,
                title: getPostTitleSlc,
                image: "images/" + selectedImage.name,
                content: getPostContentSlc
            };

            uploadImageAct(this.state.selectedFile);

            saveBlogPostAct(blogPost);
            this.handleResetForm();
        }
    };

    handleResetForm = () => {
        const { resetBlogFormAct } = this.props;
        resetBlogFormAct();
    };

    render() {
        const {
            getPostTitleSlc,
            getPostContentSlc,
            getPostCategoriesSlc,
            getAlertMessageSlc,
            isErrorMessageSlc,
            setAlertMessageAct
        } = this.props;

        if(getAlertMessageSlc.length > 0 ) {
            if(isErrorMessageSlc) {
                Alert.error(getAlertMessageSlc, {
                    position: "bottom-right",
                    effect: "slide",
                    timeout: 3000
                });
            } else {
                Alert.success(getAlertMessageSlc, {
                    position: "bottom-right",
                    effect: "slide",
                    timeout: 3000
                });
            }
            setAlertMessageAct("");
        }

        return(
            <div style={creationAreaStyle}>
                <div className="col-sm-12">
                    <Form style={formStyle}>
                        <h5 style={formTitle}>Create New Blog Post</h5>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label" style={labelStyle}>Title</label>
                            <div className="col-sm-10">
                                <FormControl
                                    type="text"
                                    placeholder="Title"
                                    className="form-control"
                                    value={getPostTitleSlc}
                                    onChange={(e) => this.handleTitleChange(e)}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label  className="col-sm-2 col-form-label" style={labelStyle}>Categories</label>
                            <div className="col-sm-10" style={tagTextStyle}>
                                <TagsInput
                                    value={getPostCategoriesSlc}
                                    placeholder="Categories"
                                    style={tagAreaStyle}
                                    onChange={(e) => this.handleTagChange(e)}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label  className="col-sm-2 col-form-label" style={labelStyle}>Content</label>
                            <div className="col-sm-10">
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    placeholder="Content"
                                    value={getPostContentSlc}
                                    onChange={(e) => this.handleContentChange(e)}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label" style={labelStyle}>Image</label>
                            <div className="col-sm-10">
                                <form action="/upload" method="post" enctype="multipart/form-data">
                                    <input type="file" name="newImage" onChange={(e) => this.onChangeHandler(e)}/>
                                </form>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label"/>
                            <div style={submitStyle}>
                                <Button
                                    className="btn btn-primary"
                                    onClick={() => this.handleCreatePost()}
                                >
                                    Create Post
                                </Button>
                            </div>
                        </div>
                    </Form>
                </div>
                <Alert stack={{ limit:1 }}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    getSelectedPostIdSlc: getSelectedPostIdSlc(state),
    getBlogPostsSlc: getBlogPostsSlc(state),
    getPostTitleSlc: getPostTitleSlc(state),
    getPostContentSlc: getPostContentSlc(state),
    getPostCategoriesSlc: getPostCategoriesSlc(state),
    getAlertMessageSlc: getAlertMessageSlc(state),
    isErrorMessageSlc: isErrorMessageSlc(state)
});
const mapDispatchToProps = {
    getBlogPostsAct,
    setPostTitleAct,
    setPostContentAct,
    setPostCategoriesAct,
    saveBlogPostAct,
    resetBlogFormAct,
    setAlertMessageAct,
    uploadImageAct
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostCreationPanel);
