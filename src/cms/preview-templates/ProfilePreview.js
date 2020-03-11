import React from 'react'
import PropTypes from 'prop-types'
import { ProfileTemplate } from '../../templates/profile'

const ProfilePreview = ({ entry, widgetFor }) => (
  <ProfileTemplate
    name={entry.getIn(['data', 'name'])}
    description={widgetFor('description')}
    summary={widgetFor('summary')}
  />
)

ProfilePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ProfilePreview
