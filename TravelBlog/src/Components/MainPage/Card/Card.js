import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    Button
} from 'react-bootstrap';
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

import Tag from './Tag/Tag';

import {
    postSelectedAct,
} from '../../../redux/actions/index';

import {
    getBlogPostsSlc,
    getSelectedPostIdSlc
} from '../../../redux/selectors/index';

class Card extends React.Component {
    constructor() {
        super();
        this.handleReadMore = this.handleReadMore.bind(this);
    }

    handleReadMore = id => {
        // const {
        //     postSelectedAct
        // } = this.props;
        //
        // postSelectedAct(id);
        //window.location.href = '/details/' + id;
    };

    renderTags = () => {
        const {
            cardCategories
        } = this.props;

        let items = [];

        if(cardCategories) {
            cardCategories.map((categoryItem, index) => (
                items.push(<Tag key={index} categoryItem={categoryItem}/>)
            ));

            return items;
        } else {
            return null;
        }
    };

    render() {

        const {
            cardId,
            cardDate,
            cardTitle,
            cardImage,
            cardContent,
            getSelectedPostIdSlc
        } = this.props;

        let link = "/details/" + (cardId - 1);

        return(
            <div className="col-sm-4">
                <div className="card" style={cardDesign}>
                    <img className="card-img-top" src={cardImage} alt="Card cap"/>

                    <div className="card-body">
                        <h5 className="card-title" style={cardTitleStyle}>{cardTitle}</h5>
                        <p style={cardDateStyle}>{cardDate}</p>
                        <div className="card-text" style={cardContext}>{cardContent}</div>
                        <Row className="col">
                            {this.renderTags()}
                        </Row>
                    </div>

                    <div className="card-footer">
                        <Button
                            type="button"
                            className="btn btn-sm btn-secondary"
                            //onClick={() => this.handleReadMore(cardId)}
                        >
                            <Link to={link} style={readMoreStyle}>Read More</Link>
                        </Button>
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
