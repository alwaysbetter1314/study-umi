import React from 'react';
import { Tabs } from 'antd';
const { TabPane } = Tabs;
class Demo extends React.Component {
    state = {
        activeKey: '1',
    }

    onTabChange = (activeKey) => {
        this.setState({ activeKey });
    }

    render() {
        return (
            <div>
                <Tabs activeKey={this.state.activeKey} onChange={this.onTabChange}>
                    <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                    <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                </Tabs>
                <p>{this.state.activeKey}</p>
            </div>
        );
    }
}
export default Demo;