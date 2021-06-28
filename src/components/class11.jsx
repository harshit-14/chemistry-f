import React,{ Component } from 'react';
import Sidebar from './sidebar'

class ScrollToTopOnMount extends Component {
    componentDidMount() {
      window.scrollTo(0, 0)
    }

    render() {
      return null
    }
}

class Class11 extends React.Component
{
    render()
    {   
    return(
        <div>
            <ScrollToTopOnMount />
            <Sidebar />
        </div>
    )
}
}
export default Class11;