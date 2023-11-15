export default {
  name: 'users',
  title: 'Users',
  type: 'document',
  fields: [
    {
      name: 'firstname',
      title: 'Firstname',
      type: 'string',
    },
    {
      name: 'lastname',
      title: 'Lastname',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'password',
      title: 'Password',
      type: 'string',
    },
    {
      name: 'ssn',
      title: 'SSN',
      type: 'string',
    },
    {
      name: 'dob',
      title: 'DOB',
      type: 'date',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
    },
    {
      name: 'street',
      title: 'Street',
      type: 'string',
    },
    {
      name: 'city',
      title: 'City',
      type: 'string',
    },
    {
      name: 'zip',
      title: 'Zip',
      type: 'string',
    },
    {
      name: 'state',
      title: 'State',
      type: 'string',
    },
    {
      name: 'accountname',
      title: 'Account Name',
      type: 'string',
    },
    {
      name: 'accountnumber',
      title: 'Account Number',
      type: 'string',
    },
    {
      name: 'bankname',
      title: 'Bank Name',
      type: 'string',
    },
    {
      name: 'routingnumber',
      title: 'Routing Number',
      type: 'string',
    },
    {
      name: 'gender',
      title: 'Gender',
      type: 'string',
    },
    {
      name: 'dlfront',
      title: 'DLfront',
      type: 'file',
    },
    {
      name: 'dlback',
      title: 'DLback',
      type: 'file',
    },
    {
      name: 'stage',
      title: 'Stage',
      type: 'object',
      fields: [
        {
          name: 'submitted',
          title: 'Submitted',
          type: 'boolean',
        },
        {
          name: 'pendingverification',
          title: 'Pending Verification',
          type: 'boolean',
        },
        {
          name: 'approved',
          title: 'Approved',
          type: 'boolean',
        },
      ],
    },
  ],
}
