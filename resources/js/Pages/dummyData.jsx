const dummyData = [
    {
      name: 'John Doe',
      contactNumber: '+1 123-456-7890',
      email: 'john.doe@example.com',
      stage: 'Prospect',
      addedOn: '2024-06-16',
      addedBy: 'Admin',
      actions: 'Edit/Delete'
    },
    {
      name: 'Jane Smith',
      contactNumber: '+1 234-567-8901',
      email: 'jane.smith@example.com',
      stage: 'Lead',
      addedOn: '2024-06-15',
      addedBy: 'Manager',
      actions: 'Edit/Delete'
    },
    {
      name: 'Michael Johnson',
      contactNumber: '+1 345-678-9012',
      email: 'michael.johnson@example.com',
      stage: 'Opportunity',
      addedOn: '2024-06-14',
      addedBy: 'Supervisor',
      actions: 'Edit/Delete'
    },
    {
      name: 'Emily Davis',
      contactNumber: '+1 456-789-0123',
      email: 'emily.davis@example.com',
      stage: 'Client',
      addedOn: '2024-06-13',
      addedBy: 'Team Lead',
      actions: 'Edit/Delete'
    },
    {
      name: 'Robert Wilson',
      contactNumber: '+1 567-890-1234',
      email: 'robert.wilson@example.com',
      stage: 'Closed',
      addedOn: '2024-06-12',
      addedBy: 'Associate',
      actions: 'Edit/Delete'
    },
    {
      name: 'John Doe',
      contactNumber: '+1 123-456-7890',
      email: 'john.doe@example.com',
      stage: 'Prospect',
      addedOn: '2024-06-16',
      addedBy: 'Admin',
      actions: 'Edit/Delete'
    },
    {
      name: 'Jane Smith',
      contactNumber: '+1 234-567-8901',
      email: 'jane.smith@example.com',
      stage: 'Lead',
      addedOn: '2024-06-15',
      addedBy: 'Manager',
      actions: 'Edit/Delete'
    },
    {
      name: 'Michael Johnson',
      contactNumber: '+1 345-678-9012',
      email: 'michael.johnson@example.com',
      stage: 'Opportunity',
      addedOn: '2024-06-14',
      addedBy: 'Supervisor',
      actions: 'Edit/Delete'
    },
    {
      name: 'Emily Davis',
      contactNumber: '+1 456-789-0123',
      email: 'emily.davis@example.com',
      stage: 'Client',
      addedOn: '2024-06-13',
      addedBy: 'Team Lead',
      actions: 'Edit/Delete'
    },
    {
      name: 'Robert Wilson',
      contactNumber: '+1 567-890-1234',
      email: 'robert.wilson@example.com',
      stage: 'Closed',
      addedOn: '2024-06-12',
      addedBy: 'Associate',
      actions: 'Edit/Delete'
    },
    {
      name: 'John Doe',
      contactNumber: '+1 123-456-7890',
      email: 'john.doe@example.com',
      stage: 'Prospect',
      addedOn: '2024-06-16',
      addedBy: 'Admin',
      actions: 'Edit/Delete'
    },
    {
      name: 'Jane Smith',
      contactNumber: '+1 234-567-8901',
      email: 'jane.smith@example.com',
      stage: 'Lead',
      addedOn: '2024-06-15',
      addedBy: 'Manager',
      actions: 'Edit/Delete'
    },
    {
      name: 'Michael Johnson',
      contactNumber: '+1 345-678-9012',
      email: 'michael.johnson@example.com',
      stage: 'Opportunity',
      addedOn: '2024-06-14',
      addedBy: 'Supervisor',
      actions: 'Edit/Delete'
    },
    {
      name: 'Emily Davis',
      contactNumber: '+1 456-789-0123',
      email: 'emily.davis@example.com',
      stage: 'Client',
      addedOn: '2024-06-13',
      addedBy: 'Team Lead',
      actions: 'Edit/Delete'
    },
    {
      name: 'Robert Wilson',
      contactNumber: '+1 567-890-1234',
      email: 'robert.wilson@example.com',
      stage: 'Closed',
      addedOn: '2024-06-12',
      addedBy: 'Associate',
      actions: 'Edit/Delete'
    },
    {
      name: 'John Doe',
      contactNumber: '+1 123-456-7890',
      email: 'john.doe@example.com',
      stage: 'Prospect',
      addedOn: '2024-06-16',
      addedBy: 'Admin',
      actions: 'Edit/Delete'
    },
    {
      name: 'Jane Smith',
      contactNumber: '+1 234-567-8901',
      email: 'jane.smith@example.com',
      stage: 'Lead',
      addedOn: '2024-06-15',
      addedBy: 'Manager',
      actions: 'Edit/Delete'
    },
    {
      name: 'Michael Johnson',
      contactNumber: '+1 345-678-9012',
      email: 'michael.johnson@example.com',
      stage: 'Opportunity',
      addedOn: '2024-06-14',
      addedBy: 'Supervisor',
      actions: 'Edit/Delete'
    },
    {
      name: 'Emily Davis',
      contactNumber: '+1 456-789-0123',
      email: 'emily.davis@example.com',
      stage: 'Client',
      addedOn: '2024-06-13',
      addedBy: 'Team Lead',
      actions: 'Edit/Delete'
    },
    {
      name: 'Robert Wilson',
      contactNumber: '+1 567-890-1234',
      email: 'robert.wilson@example.com',
      stage: 'Closed',
      addedOn: '2024-06-12',
      addedBy: 'Associate',
      actions: 'Edit/Delete'
    },
    {
      name: 'John Doe',
      contactNumber: '+1 123-456-7890',
      email: 'john.doe@example.com',
      stage: 'Prospect',
      addedOn: '2024-06-16',
      addedBy: 'Admin',
      actions: 'Edit/Delete'
    },
    {
      name: 'Jane Smith',
      contactNumber: '+1 234-567-8901',
      email: 'jane.smith@example.com',
      stage: 'Lead',
      addedOn: '2024-06-15',
      addedBy: 'Manager',
      actions: 'Edit/Delete'
    },
    {
      name: 'Michael Johnson',
      contactNumber: '+1 345-678-9012',
      email: 'michael.johnson@example.com',
      stage: 'Opportunity',
      addedOn: '2024-06-14',
      addedBy: 'Supervisor',
      actions: 'Edit/Delete'
    },
    {
      name: 'Emily Davis',
      contactNumber: '+1 456-789-0123',
      email: 'emily.davis@example.com',
      stage: 'Client',
      addedOn: '2024-06-13',
      addedBy: 'Team Lead',
      actions: 'Edit/Delete'
    },
    {
      name: 'Robert Wilson',
      contactNumber: '+1 567-890-1234',
      email: 'robert.wilson@example.com',
      stage: 'Closed',
      addedOn: '2024-06-12',
      addedBy: 'Associate',
      actions: 'Edit/Delete'
    },
    {
      name: 'John Doe',
      contactNumber: '+1 123-456-7890',
      email: 'john.doe@example.com',
      stage: 'Prospect',
      addedOn: '2024-06-16',
      addedBy: 'Admin',
      actions: 'Edit/Delete'
    },
    {
      name: 'Jane Smith',
      contactNumber: '+1 234-567-8901',
      email: 'jane.smith@example.com',
      stage: 'Lead',
      addedOn: '2024-06-15',
      addedBy: 'Manager',
      actions: 'Edit/Delete'
    },
    {
      name: 'Michael Johnson',
      contactNumber: '+1 345-678-9012',
      email: 'michael.johnson@example.com',
      stage: 'Opportunity',
      addedOn: '2024-06-14',
      addedBy: 'Supervisor',
      actions: 'Edit/Delete'
    },
    {
      name: 'Emily Davis',
      contactNumber: '+1 456-789-0123',
      email: 'emily.davis@example.com',
      stage: 'Client',
      addedOn: '2024-06-13',
      addedBy: 'Team Lead',
      actions: 'Edit/Delete'
    },
    {
      name: 'Robert Wilson',
      contactNumber: '+1 567-890-1234',
      email: 'robert.wilson@example.com',
      stage: 'Closed',
      addedOn: '2024-06-12',
      addedBy: 'Associate',
      actions: 'Edit/Delete'
    },
  ];
  
export default dummyData;
  