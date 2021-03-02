import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './containers/Home'
import Login from './containers/Login'
import Signup from './containers/Signup'
import NewNote from './containers/NewNote'
import Notes from './containers/Notes'
import Settings from './containers/Settings'
import NotFound from './containers/NotFound'
import AuthenticatedRoute from './components/AuthenticatedRoute'
import UnauthenticatedRoute from './components/UnauthenticatedRoute'

export default function Routes() {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <UnauthenticatedRoute exact path='/login'>
        <Login />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path='/signup'>
        <Signup />
      </UnauthenticatedRoute>
      <AuthenticatedRoute exact path='/notes/new'>
        <NewNote />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path='/notes/:id'>
        <Notes />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path='/settings'>
        <Settings />
      </AuthenticatedRoute>
      {/* Finally, catch all unmatched routes */}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  )
}
// Switch is a react router component which renders the first matching route that is defined within it. exact ensures match is exactly '/' otherwises it will recognize any path with "/" attached.