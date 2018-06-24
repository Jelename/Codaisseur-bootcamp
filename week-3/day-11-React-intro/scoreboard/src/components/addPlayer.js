import React, { PureComponent } from 'react';

export default class AddPlayer extends PureComponent {
  render() {
    return (
      <div className="add-player">
        <form>
          <label>
            Name: <input type="text" name="name" />
          </label>
          <input type="submit" value="Add" />
        </form>
      </div>
    )
  }
}
