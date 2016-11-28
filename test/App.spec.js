/**
 * Created by maksalizm on 2016. 11. 22..
 */
/* eslint-env mocha */
const { expect } = require('chai')
const React = require('react')
const Search = require('../js/Search')
const ShowCard = require('../js/ShowCard')
const { shallow, mount } = require('enzyme')
const { shows } = require('../public/data')
const { store, rootReducer } = require('../js/Store')
// describe('<Search />', () => {
//   it('should pass', () => {
//     expect(1+1 === 2).to.be.true
//   })
//   xit('should pass', () => {
//     expect(1+1 === 2).to.equal(5)
//   })
// })

xdescribe('<Search />', () => {
  it('should render the brand', () => {
    const wrapper = shallow(<Search />)
    // console.log(wrapper.debug())
    expect(wrapper.contains(<h1 className="brand">svideo</h1>)).to.be.true
  })

  it('should render as many shows as there are data for', () => {
    const wrapper = shallow(<Search/>)
    expect(wrapper.find(ShowCard).length).to.equal(shows.length)
  })

  it('should filter correctly given new state', () => {
    const wrapper = mount(<Search />)
    const input = wrapper.find(".search-input")
    input.node.value = 'house'
    input.simulate('change')
    expect(wrapper.state('searchTerm')).to.equal('house')
    expect(wrapper.find('.show-card').length).to.equal(2)
  })
})

describe('Store', () => {
  it('should bootstrap', () => {
    const state = rootReducer(undefined, {type: '@@redux/INIT'})
    expect(state).to.deep.equal({searchTerm: ''})
  })
})
