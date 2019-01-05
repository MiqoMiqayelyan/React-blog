import React from 'react';
import './RightBlock.css';
import { RightBlockNavBAr } from '../right-block-navbar/RightBlock_navBar';
import {First} from '../right-navbar-content/first/first';
import {Second} from '../right-navbar-content/second/second';
import {Thurd} from '../right-navbar-content/thurd/thurd';
import { LikeList } from '../like-list/LikeList';
import { Archives } from '../archives/Archives';

let rightPhoto = "https://i.pinimg.com/236x/f9/e7/83/f9e783e84fd402ef20a2cbf31150d7fe--baby-girl-names-baby-girls.jpg"
export default class RightBlock extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            content: <First   //give state first default content
            src={rightPhoto}
            title="This is First Content"
            description="This is First Content text , writing somethin..."
            />
        }
    }

    changeNavBarContent = (e) => {
        e.preventDefault();
        let tar = e.target.className;
        if(tar === 'second'){  //check target class
            this.setState(() => ({
                content : <Second 
                src={rightPhoto}
                title="This is Second Content"
                description="This is First Content text , writing somethin..."
                />
            }))
        }else if (tar === 'thurd'){ //chech target class
            this.setState(() => ({ 
                content : <Thurd 
                src={rightPhoto}
                title="This is Thurd Content"
                description="This is First Content text , writing somethin..."
                />
            }))
        }else { //come back the first default state
            this.setState(() => ({
                content : <First 
                src={rightPhoto}
                title="This is First Content"
                description="This is First Content text , writing somethin..."
                />
            }))
        }

        
    }

    render(){
        return(
            <div className="rightblock_wrapper">
                <div className="rightblock_top"><p>TOP STORIES</p></div>
                <RightBlockNavBAr 
                first="fashion"
                second="cinema"
                thurd="television"
                changeNavBarContent={this.changeNavBarContent}
                />
                {this.state.content}
                {this.state.content}
                {this.state.content}
                <LikeList />
                <Archives />
            </div>
        )
    }
}