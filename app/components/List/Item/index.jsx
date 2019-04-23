import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link} from 'react-router'

import './style.less'

class ListItem extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data
        let time_start = data.time_start
        time_start = time_start.replace("T"," ").substr(0,time_start.length-6)
        return (
            <div className="list-item clear-fix">
                <Link to={'/detail/' + data.id}>
                    <div className="item-img-container float-left">
                        <img src={data.image_url} alt={data.name}/>
                    </div>
                    <div className="item-content">
                        <div className="item-title-container clear-fix">
                            <h3 className="float-left">{data.name}</h3>
                        </div>
                        <p>
                            {data.category}
                        </p>
                        <div className="item-price-container clear-fix">
                            <span
                                className="price float-left">Start At:  {time_start}</span>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default ListItem
