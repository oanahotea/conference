import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const SessionForm = ({
  session,
  speakers,
  onSave,
  onChange,
  saving = false,
  errors = {},
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{session.session_id ? "Edit" : "Add"} session</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="session_name"
        label="Name"
        value={session.session_name}
        onChange={onChange}
        error={errors.name}
      />

      <TextInput
        name="session_description"
        label="Description"
        value={session.session_description}
        onChange={onChange}
        error={errors.date}
      />

      <SelectInput
        name="speaker"
        label="Speaker"
        value={session.speaker}
        defaultOption="Select speaker"
        options={speakers.map((speaker) => ({
          value: speaker.speaker_id,
          text: speaker.first_name + " " + speaker.last_name,
        }))}
        onChange={onChange}
        error={errors.speaker}
      />

      <TextInput
        name="session_length"
        label="Duration"
        value={session.session_length}
        onChange={onChange}
        error={errors.date}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

SessionForm.propTypes = {
  speakers: PropTypes.array.isRequired,
  session: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
};

export default SessionForm;
