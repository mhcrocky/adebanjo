import React from 'react'
import { Route, Redirect,RouteProps } from 'react-router-dom'
//redux stuff
import { connect } from 'react-redux'
interface MyRouteProps extends RouteProps{
    component:any;
    authenticated:boolean;
    rest?:any
}
const GuestRoute: React.SFC<MyRouteProps>= ({ component: Component, authenticated, ...rest }) => (
    <Route 
        {...rest} 
        render={(props:any) =>authenticated ?<Redirect to='/' /> :<Component {...props} />}
    />
);
const mapStateToProps = (state:any) => ({
    authenticated: state.user.authenticated
});
export default connect(mapStateToProps)(GuestRoute)