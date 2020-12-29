import React, { Component } from 'react';

class Course extends Component {
    constructor(props){
        super(props);
        this.handleClick3 = this.handleClick3.bind(this);
        this.registerCourse = this.registerCourse.bind(this);
    }
    
    //Btn xem3 Khóa học nào ấn vào show đúng khóa học đó


    handleClick1() {
        alert("view1");
    }

    handleClick2(content) {
        alert(content);
    }

    handleClick3() {
        alert(this.props.name);
    }

    registerCourse(){
        console.log(this.props);
    }

    showButtonFree() {
        const isFree = this.props.free;
        // console.log('isFree', isFree);
        if (isFree === true) {
            return <div>
                <button onClick={this.handleClick1} style={{ background: "yellow" }}>Xem1</button>
                <button onClick={() => this.handleClick2('view 2')} style={{ background: "red" }}>Xem2</button>
                <button onClick={this.handleClick3} style={{ background: "pink" }}>Xem3</button>
            </div>

        }
        else {
            return(
                <>
                    <input ref='username' placeholder="Username..." type="text" />
                    <button onClick={this.registerCourse} type="button">OK</button>
                </>
            )
        }
    }



    render() {
        return (
            <>
                <h1>{this.props.name}</h1>
                <p>{this.props.time}</p>
                <h3>{this.props.children}</h3>
                {this.showButtonFree()}
                <hr />
            </>
        );
    }
}

export default Course;










