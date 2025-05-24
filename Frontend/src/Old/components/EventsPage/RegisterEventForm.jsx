import React, { useState } from 'react';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { Button } from '@/Components/ui/button';
import { Textarea } from '@/Components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/Components/ui/select';

const RegisterEventForm = ({ formData, setFormData,handleSubmit }) => {

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSelectChange = (value) => {
    setFormData({
      ...formData,
      type: value
    });
  };



  return (
    <div className="w-full md:w-1/2 h-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Register Event</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Label htmlFor="name">Event Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData?.name}
            onChange={handleChange}
            placeholder="Enter event name"
            required
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            value={formData?.description}
            onChange={handleChange}
            placeholder="Describe the event"
            required
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="prizeMoney">Prize Money</Label>
          <Input
            id="prizeMoney"
            name="prizeMoney"
            type="number"
            value={formData?.prizeMoney}
            onChange={handleChange}
            placeholder="Enter prize amount"
            required
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="type">Event Type</Label>
          <Select onValueChange={handleSelectChange}>
            <SelectTrigger id="type">
              {formData?.type || "Select type"}
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Upcoming">Upcoming</SelectItem>
              <SelectItem value="Past">Past</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default RegisterEventForm;
