import React from 'react'

import style from './overlay.module.css'

import Collections from './index'

const Empty = () => null

class OverlayProvider extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            hidden: true,
            component: Empty,
            props: {},
        }
    }

    showOverlay = (component, props) =>
        this.setState({
            hidden: false,
            component,
            props,
        })
    hideOverlay = (e) => {
        if (!e.defaultPrevented) {
            this.setState({ hidden: true })
        }
    }

    render() {
        return (
            <div>
                <Collections
                    {...this.props}
                    showOverlay={this.showOverlay}
                />
                {
                    !this.state.hidden &&
                        <div className={style.overlay} onClick={this.hideOverlay}>
                            <div className={style.inner}>
                                <this.state.component {...this.state.props} />
                            </div>
                        </div>
                }
            </div>
        )
    }
}

export default OverlayProvider