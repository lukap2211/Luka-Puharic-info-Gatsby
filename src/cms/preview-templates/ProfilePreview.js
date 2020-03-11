import React from 'react'
import PropTypes from 'prop-types'
import { ProfileTemplate } from '../../templates/profile'

const ProfilePreview = ({ entry, widgetFor, fieldsMetaData }) => {

  return (
    <ProfileTemplate
      skills={entry.getIn(['data', 'skills'])}
      experience={entry.getIn(['data', 'experience'])}
      education={entry.getIn(['data', 'education'])}
    />
  )
}

ProfilePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ProfilePreview
