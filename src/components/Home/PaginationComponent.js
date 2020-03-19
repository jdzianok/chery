import React, { Component } from "react";

class PaginationComponent extends Component {
  state = {
    data: null,
    currentPage: 1,
    itemsPerPage: 3,
    category: 0
  };

  componentDidMount() {
    this.mounted = true;
    const url = "https://api.jsonbin.io/b/5e494fb8d18e40166179b674";
    return fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Blad sieci");
        }
      })
      .then(data => {
        if (this.mounted) {
          this.setState({ data });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  handleCategoryChange = event => {
    this.setState({
      category: Number(event.target.dataset.category),
      currentPage: 1
    });
  };

  handleClick = event => {
    this.setState({
      currentPage: Number(event.target.id)
    });
  };

  render() {
    const { data, currentPage, itemsPerPage, category } = this.state;

    if (data == null) {
      return <div>Loading...</div>;
    } else {
      const dataDesc = data.map(item => {
        return item.desc;
      });

      const curr = data.slice();
      const content = curr[category].items.slice();

      // Logic for displaying current items
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const currentItems = content.slice(indexOfFirstItem, indexOfLastItem);

      const renderItems = currentItems.map((item, index, arr) => {
        if (index < arr.length - 1) {
          return (
            <div className="item" key={index}>
              <div className="item__wrapper">
                <h4 className="item__header">{item.title}</h4>
                <p className="item__description">{item.description}</p>
              </div>
              <p className="item__tags">{item.tags}</p>
            </div>
          );
        } else {
          return (
            <div className="item item--noBorder" key={index}>
              <div className="item__wrapper">
                <h4 className="item__header">{item.title}</h4>
                <p className="item__description">{item.description}</p>
              </div>
              <p className="item__tags">{item.tags}</p>
            </div>
          );
        }
      });

      // Logic for displaying page numbers
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(content.length / itemsPerPage); i++) {
        pageNumbers.push(i);
      }

      const renderPageNumbers = pageNumbers.map(number => {
        return (
          <button
            className={`pagination__btn pagination__btn${
              currentPage === number ? "--active" : ""
            }`}
            key={number}
            id={number}
            onClick={this.handleClick}
          >
            {number}
          </button>
        );
      });

      return (
        <section className="whoWeHelp" id="organizations">
          <div className="head">
            <h2 className="head__title">Komu pomagamy?</h2>
            <p className="head__description">{dataDesc[category]}</p>
            <ul className="head__organizations">
              <li
                className={`head__organization head__organization${
                  category === 0 ? " active" : ""
                }`}
                data-category="0"
                onClick={this.handleCategoryChange}
              >
                Fundacje
              </li>
              <li
                className={`head__organization head__organization${
                  category === 1 ? " active" : ""
                }`}
                data-category="1"
                onClick={this.handleCategoryChange}
              >
                Organizacje
              </li>
              <li
                className={`head__organization head__organization${
                  category === 2 ? " active" : ""
                }`}
                data-category="2"
                onClick={this.handleCategoryChange}
              >
                Zbiórki
              </li>
              <span className="head__activeLine"></span>
            </ul>
          </div>
          <div className="items">{renderItems}</div>
          <div className="pagination">{renderPageNumbers}</div>
        </section>
      );
    }
  }
}

export default PaginationComponent;
