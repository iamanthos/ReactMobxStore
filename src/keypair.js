import React, { useState, useEffect } from 'react';
import './style.css';
import { observer } from 'mobx-react';
import { useStore } from './hooks';
import { keypairStoreInstance } from './keypairStore';

const Keypair = observer(() => {
  console.log('keypairStoreInstance', keypairStoreInstance);

  const handleSubmit = (e) => {
    e.preventDefault();
    window.test = keypairStoreInstance;
    let selectedKeypair = [];
    keypairStoreInstance.pairArray.map((pair) => {
      if (pair.toggle) {
        selectedKeypair = [...selectedKeypair, pair];
        return selectedKeypair;
      }
    });
    const a = {
      header: selectedKeypair,
    };
    console.log('Submit', a);
    console.log('Clicked');
  };

  const handleChange = (id, property, value) => {
    console.log(
      'keypairStoreInstance.pairArray',
      keypairStoreInstance.pairArray
    );
    console.log('id is');
    console.log(id);
    keypairStoreInstance.updatePair(id, property, value);
  };

  return (
    <div>
      Headers
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Key</th>
            <th>Value</th>
            <th>Description</th>
            <th>
              <input
                type="button"
                value="Add"
                onClick={(keyItemValue, descItemValue, valItemValue) =>
                  keypairStoreInstance.setPair(
                    keyItemValue,
                    descItemValue,
                    valItemValue
                  )
                }
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {keypairStoreInstance.pairArray &&
            keypairStoreInstance.pairArray.map((pair, i) => {
              return (
                <tr>
                  <td>
                    <input
                      type="checkbox"
                      checked={keypairStoreInstance.pairArray[i].toggle}
                      onClick={(e) =>
                        handleChange(
                          pair.id,
                          'toggle',
                          !keypairStoreInstance.pairArray[i].toggle
                        )
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Key"
                      aria-label="Key"
                      onChange={(e) =>
                        handleChange(pair.id, 'key', e.target.value)
                      }
                      value={keypairStoreInstance.pairArray[i].key}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Value"
                      aria-label="Value"
                      onChange={(e) =>
                        handleChange(pair.id, 'value', e.target.value)
                      }
                      value={keypairStoreInstance.pairArray[i].value}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Description"
                      aria-label="Description"
                      onChange={(e) =>
                        handleChange(pair.id, 'description', e.target.value)
                      }
                      value={keypairStoreInstance.pairArray[i].description}
                    />
                  </td>
                  <td>
                    <input
                      type="button"
                      value="Delete"
                      onClick={() => keypairStoreInstance.deletePair(pair.id)}
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <input type="submit" value="Submit" onClick={handleSubmit} />
    </div>
  );
});

export default Keypair;
