import React from 'react';
import { connect } from 'react-redux';
import {
    cardDesign,
    cardContext,
    cardTitleStyle,
    cardDateStyle,
    readMoreStyle
} from './Style';

import {
    Row
} from 'react-bootstrap';

import Categories from './Categories';

import {
    postSelectedAct,
} from '../../redux/actions';

import {
    getBlogPostsSlc,
    getSelectedPostIdSlc
} from '../../redux/selectors';

class Card extends React.Component {
    constructor() {
        super();
        this.handleReadMore = this.handleReadMore.bind(this);
    }

    handleReadMore = id => {

        const {
            postSelectedAct
        } = this.props;

        postSelectedAct(id);
        //window.location.href = '/details/' + id;
    };

    render() {

        const {
            cardId,
            cardDate,
            cardTitle,
            cardImage,
            cardContent,
            cardCategories,
            getSelectedPostIdSlc
        } = this.props;

        let link = "/details/" + getSelectedPostIdSlc;

        return(
            <div className="col-sm-4">
                <div className="card" style={cardDesign}>
                    <img className="card-img-top" src={cardImage} alt="Card cap"/>

                    <div className="card-body">
                        <h5 className="card-title" style={cardTitleStyle}>{cardTitle}</h5>
                        <p style={cardDateStyle}>{cardDate}</p>
                        <div className="card-text" style={cardContext}>{cardContent}</div>
                        <Row className="col">
                            {cardCategories
                                ? cardCategories.map((categoryItem, index) => (
                                    <Categories key={index} categoryItem={categoryItem}/>
                                ))
                                : null}
                        </Row>
                    </div>

                    <div className="card-footer">
                        <button
                            type="button"
                            className="btn btn-sm btn-secondary"
                            onClick={() => this.handleReadMore(cardId)}
                        >
                            <a href={link} style={readMoreStyle}>Read More</a>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    getBlogPostsSlc: getBlogPostsSlc(state),
    getSelectedPostIdSlc: getSelectedPostIdSlc(state)
});
const mapDispatchToProps = {
    postSelectedAct,
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Card);
