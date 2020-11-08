import * as React from 'react'
import Index from '../../app/routes/index'

export default {
  title: 'Index',
  component: Index,
}
const Template = args => <Index {...args} />

export const Home = Template.bind({})
Home.args = {}
Home.routeData = {fakeIndex: true}
