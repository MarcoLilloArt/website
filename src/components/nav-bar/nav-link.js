import React from 'react'

import style from './nav-link.module.css'

class NavLink extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            mouseOver: false,
        }
    }

    render() {
        let { to, children, onClick, submenu } = this.props

        console.log('here')

        return (
            <div
                onMouseEnter={() => this.setState({ mouseOver: true })}
                onMouseLeave={() => this.setState({ mouseOver: false })}
                className={style.container}
            >
                <a className={style.link} href={to} children={children} />
                {
                    this.state.mouseOver && 
                        <div className={style.submenuContainer}>
                            <div className={style.submenu}>
                                {
                                    submenu && Object.keys(submenu).map(item =>
                                        <a className={style.link} href={to} onClick={() => onClick(item)}>
                                            <div children={submenu[item]} />
                                        </a>
                                    )
                                }
                            </div>
                        </div>
                }
            </div>
        )
    }
}

export default NavLink