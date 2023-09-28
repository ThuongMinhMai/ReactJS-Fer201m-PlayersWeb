import React,{Component} from 'react';
export default class Navigation extends Component {
    render(){
        return(
            <div>
                <nav>
                    <ul>
                        <li>
                            <a className='active' href='#home'>Home</a>
                        </li>
                        <li>
                            <a className='' href='#news'>News</a>
                        </li>
                        <li>
                            <a className='' href='#about'>About</a>
                        </li>
                        <li>
                            <a className='' href='#contact'>Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}