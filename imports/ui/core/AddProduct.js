import React, { Component } from 'react'
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import { Button, Form, Dropdown } from 'semantic-ui-react'
import ImageInput from './ImageInput'

class AddProduct extends Component {
  handleSubmit = () => {
    this.props.addProduct({
      variables: {
          name: this.name.value,
          description: this.description.value,
          price: this.price.value,
          category: this.category.ref.innerText,
          images: [this.image.state.value],
      }
    }).then(({ res }) => {
    }).catch(error => {});
  };

  render() {
    const options = [
      { key: 'electronics', text: 'Electronics', value: 'electronics' },
      { key: 'clothes', text: 'Clothes', value: 'clothes' }
    ]

    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Product Name</label>
            <input 
              type='text'
              name='name'
              placeholder='Name'
              ref={input => (this.name = input)}
            />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <input 
              type='text'
              name='description'
              placeholder='Description'
              ref={input => (this.description = input)}
            />
          </Form.Field>
          <Form.Field>
            <label>Price</label>
            <input 
              type='number'
              name='price'
              placeholder='Price'
              ref={input => (this.price = input)}
            />
          </Form.Field>
          <Form.Field>
            <label>Category</label>
            <Dropdown 
              name='category'
              placeholder=''
              fluid
              selection
              search
              options={options}
              ref={input => (this.category = input)}
            />
          </Form.Field>
          <Form.Field>
            <label>Image</label>
            <ImageInput
              className="create-contact-avatar-input"
              name="avatarURL"
              maxHeight={256}
              ref={input => (this.image = input)}
            />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </>
    )
  }
}

const addProduct = gql`
  mutation addProduct($name: String!, $description: String, $price: Float!, $category: String, $images: [String]) {
    addProduct(name: $name, description: $description, price: $price, category: $category, images: $images) {
      _id
    }
  }
`;

export default graphql(addProduct, {
  name: 'addProduct',
})(AddProduct)
