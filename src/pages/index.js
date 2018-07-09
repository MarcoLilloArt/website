import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import Collections from '../components/collections'
import style from './index.module.css'
import MarcoLogo from '../components/marco-logo';

const IndexPage = () => (
  <div>
    <div className={style.introContainer}>
      <MarcoLogo />
      <p className={style.introText}>from nowhere with love</p>
    </div>
    <div className={style.frontContainer}>
      <div className={style.frontInnerContainer}>
        <ScrollableAnchor id="collections">
            <div className={style.contentGroup}>
              <Collections />
            </div>
        </ScrollableAnchor>
        <ScrollableAnchor id="history">
          <div className={style.contentGroup}>
            <h3>history</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue nisi vitae suscipit tellus mauris a. Mi proin sed libero enim. Porttitor eget dolor morbi non arcu risus quis. Elit at imperdiet dui accumsan sit amet nulla facilisi. Mauris commodo quis imperdiet massa. Interdum posuere lorem ipsum dolor sit amet. Fermentum dui faucibus in ornare quam viverra orci sagittis eu. Elementum sagittis vitae et leo duis ut diam quam nulla. Elit ullamcorper dignissim cras tincidunt lobortis. Potenti nullam ac tortor vitae purus faucibus. Nec feugiat nisl pretium fusce id velit. Auctor augue mauris augue neque gravida. Sed felis eget velit aliquet. Augue lacus viverra vitae congue eu consequat. Pellentesque id nibh tortor id aliquet lectus proin. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Amet facilisis magna etiam tempor orci. Quam quisque id diam vel quam elementum pulvinar etiam. Consectetur libero id faucibus nisl tincidunt eget.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue nisi vitae suscipit tellus mauris a. Mi proin sed libero enim. Porttitor eget dolor morbi non arcu risus quis. Elit at imperdiet dui accumsan sit amet nulla facilisi. Mauris commodo quis imperdiet massa. Interdum posuere lorem ipsum dolor sit amet. Fermentum dui faucibus in ornare quam viverra orci sagittis eu. Elementum sagittis vitae et leo duis ut diam quam nulla. Elit ullamcorper dignissim cras tincidunt lobortis. Potenti nullam ac tortor vitae purus faucibus. Nec feugiat nisl pretium fusce id velit. Auctor augue mauris augue neque gravida. Sed felis eget velit aliquet. Augue lacus viverra vitae congue eu consequat. Pellentesque id nibh tortor id aliquet lectus proin. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Amet facilisis magna etiam tempor orci. Quam quisque id diam vel quam elementum pulvinar etiam. Consectetur libero id faucibus nisl tincidunt eget.</p>
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id="exhibition">
          <div className={style.contentGroup}>
            <h3>exhibition</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue nisi vitae suscipit tellus mauris a. Mi proin sed libero enim. Porttitor eget dolor morbi non arcu risus quis. Elit at imperdiet dui accumsan sit amet nulla facilisi. Mauris commodo quis imperdiet massa. Interdum posuere lorem ipsum dolor sit amet. Fermentum dui faucibus in ornare quam viverra orci sagittis eu. Elementum sagittis vitae et leo duis ut diam quam nulla. Elit ullamcorper dignissim cras tincidunt lobortis. Potenti nullam ac tortor vitae purus faucibus. Nec feugiat nisl pretium fusce id velit. Auctor augue mauris augue neque gravida. Sed felis eget velit aliquet. Augue lacus viverra vitae congue eu consequat. Pellentesque id nibh tortor id aliquet lectus proin. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Amet facilisis magna etiam tempor orci. Quam quisque id diam vel quam elementum pulvinar etiam. Consectetur libero id faucibus nisl tincidunt eget.</p>
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id="contact">
          <div className={style.contentGroup}>
            <h3>contact</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue nisi vitae suscipit tellus mauris a. Mi proin sed libero enim. Porttitor eget dolor morbi non arcu risus quis. Elit at imperdiet dui accumsan sit amet nulla facilisi. Mauris commodo quis imperdiet massa. Interdum posuere lorem ipsum dolor sit amet. Fermentum dui faucibus in ornare quam viverra orci sagittis eu. Elementum sagittis vitae et leo duis ut diam quam nulla. Elit ullamcorper dignissim cras tincidunt lobortis. Potenti nullam ac tortor vitae purus faucibus. Nec feugiat nisl pretium fusce id velit. Auctor augue mauris augue neque gravida. Sed felis eget velit aliquet. Augue lacus viverra vitae congue eu consequat. Pellentesque id nibh tortor id aliquet lectus proin. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Amet facilisis magna etiam tempor orci. Quam quisque id diam vel quam elementum pulvinar etiam. Consectetur libero id faucibus nisl tincidunt eget.</p>
          </div>
        </ScrollableAnchor>
      </div>
    </div>
  </div>
)

export default IndexPage
