import { Component } from 'react';
import Sidebar2 from './sidebar2'

class ScrollToTopOnMount extends Component {
    componentDidMount() {
      window.scrollTo(0, 0)
    }
    render() {
      return null
    }
}

class Class12 extends Component
{
    render()
    {
    return(
        <div>
            <ScrollToTopOnMount />
            <Sidebar2 />
        </div>
    )
}
}
export default Class12;