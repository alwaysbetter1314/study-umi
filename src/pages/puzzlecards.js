import React, { Component } from 'react';
import { Card , Button} from 'antd';
import { connect } from 'dva';

const namespace = 'puzzlecards';
// 状态转为参数
const mapStateToProps = (state) => {
    const cardList = state[namespace].data;
    return {
        cardList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      onDidMount: () => {
        dispatch({
          type: `${namespace}/queryInitCards`,
        });
      },
    };
  };

@connect(mapStateToProps, mapDispatchToProps)
export default class PuzzleCardsPage extends Component {
    componentDidMount(){
        this.props.onDidMount();
    }
    render() {
        return (
            <div>
                {
                    this.props.cardList.map(card => {
                        return (
                            <Card key={card.id}>
                                <div>Title: {card.setup}</div>
                                <div>
                                    <strong>SubTitle: {card.punchline}</strong>
                                </div>
                            </Card>
                        );
                    })
                }
            </div>
        );
    }
}