import React, { Fragment } from 'react';
import Category from './Category';
import Footer from './Footer';
import Ukraine from './Ukraine';
import SiteMenu from './SiteMenu';

const App = ({ meta, heading, categories, body }) => {
  let regionalCount = 0;
  return (
    <Fragment>
      <div id="page">
        <div id="center">
          <h1>
            <img
              src="./img/ccmusicawards.svg"
              alt="CC Community Music Awards"
            />
          </h1>
          <SiteMenu />
          <h2>{heading}</h2>

          {body && <div dangerouslySetInnerHTML={{ __html: body }} />}

          {categories &&
            categories.map(category => {
              if (category.regional) {
                regionalCount += 1;
              }

              return regionalCount === 1 ? (
                <Fragment key={category.name}>
                  <h3>Regional</h3>

                  <Category
                    name={category.name}
                    nominees={category.nominees}
                    regional={category.regional}
                  />
                </Fragment>
              ) : (
                <Category
                  key={category.name}
                  name={category.name}
                  nominees={category.nominees}
                  regional={category.regional}
                />
              );
            })}
          <Footer />
        </div>
      </div>
      {meta.ukraine && <Ukraine />}
    </Fragment>
  );
};

export default App;
