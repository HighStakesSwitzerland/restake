import React, { useEffect } from 'react';
import {
  Modal
} from 'react-bootstrap'

import { useSearchParams } from 'react-router-dom'

function About(props) {
  let [searchParams, setSearchParams] = useSearchParams();
  const aboutParam = searchParams.get('about')

  const show = props.show || aboutParam == 'restake'

  useEffect(() => {
    if (show && !aboutParam) {
      setSearchParams({ about: 'restake' })
    }
  }, [show, aboutParam]);

  function onHide(){
    setSearchParams({})
    props.onHide()
  }

  return (
    <>
      <Modal show={show} onHide={() => onHide()}>
        <Modal.Header closeButton>
          <Modal.Title>About REStake</Modal.Title>
        </Modal.Header>
        <Modal.Body className="small">
          <h5>How REStake works</h5>
          <p>REStake makes use of a new feature in Cosmos blockchains called Authz. This allows us, High Stakes 🇨🇭, to send certain pre-authorized transactions on your behalf.</p>
          <p>When you enable REStake you authorize us to send WithdrawDelegatorReward for any address, and Delegate for our own validator address. We <strong>cannot</strong> delegate to any other validators, the authorisation expires automatically after one year, and you can revoke it at any time.</p>
          <p><strong>The operation is absolutely safe</strong></p>
          <h5>How to use REStake</h5>
          <ol>
            <li>Choose a network. Some don't support Authz yet but many do.</li>
            <li>Delegate to High Stakes 🇨🇭 or any validators who offers the REStake service.</li>
            <li>Enable REStake if you want to compound rewards.</li>
            <li>Watch the countdown timer and profit!</li>
          </ol>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default About
