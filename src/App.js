import React, { useState } from 'react';
import { Button, TextField, Container, Typography } from '@material-ui/core';
import { Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const App = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (info) => {
    if (info.file.status === 'done') {
      setFile(info.file.originFileObj);
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (file) {
      // Handle the file upload logic here
      console.log('File uploaded:', file);
    } else {
      message.error('Please select a file to upload.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Photo Upload Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <Upload
          name="file"
          showUploadList={false}
          onChange={handleFileChange}
        >
          <Button
            variant="contained"
            color="primary"
            startIcon={<UploadOutlined />}
          >
            Choose File
          </Button>
        </Upload>
        <TextField
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: '16px' }}
        >
          Submit
        </TextField>
      </form>
    </Container>
  );
};

export default App;
