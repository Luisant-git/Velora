import React, { useState, useEffect } from "react";
import { veloraAPI } from "../../api/velora";
import { Card, Button, Form, Alert, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";

interface AdminProfile {
  id: string;
  email: string;
  name: string;
  phone?: string;
  logo?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  pinCode?: string;
  gstNumber?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

const Profile: React.FC = () => {
  const [profile, setProfile] = useState<AdminProfile | null>(null);
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    logo: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
    gstNumber: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await veloraAPI.getCompanyProfile();
        setProfile(data);
        setFormData({
          name: data.name || "",
          email: data.email || "",
          phone: data.phone || "",
          logo: data.logo || "",
          address: data.address || "",
          city: data.city || "",
          state: data.state || "",
          country: data.country || "",
          pinCode: data.pinCode || "",
          gstNumber: data.gstNumber || "",
        });
      } catch {
        setProfile(null);
      }
    };
    fetchProfile();
  }, []);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleCancel = () => {
    setEditing(false);
    if (profile) {
      setFormData({
        name: profile.name,
        email: profile.email,
        phone: profile.phone || "",
        logo: profile.logo || "",
        address: profile.address || "",
        city: profile.city || "",
        state: profile.state || "",
        country: profile.country || "",
        pinCode: profile.pinCode || "",
        gstNumber: profile.gstNumber || "",
      });
    }
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      if (profile) {
        const updatePayload = {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          logo: formData.logo,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          country: formData.country,
          pinCode: formData.pinCode,
          gstNumber: formData.gstNumber,
        };
        await veloraAPI.updateCompanyProfile(updatePayload);
        const updated = await veloraAPI.getCompanyProfile();
        setProfile(updated);
        setEditing(false);
        toast.success("Profile updated successfully");
      }
    } catch (error) {
      toast.error("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  if (!profile) {
    return (
      <div className="container-fluid">
        <div className="page-header">
          <h4 className="page-title">Profile</h4>
        </div>
        <Alert variant="warning">No profile data found</Alert>
      </div>
    );
  }

  return (
    <div className="container-fluid">
      <div className="page-header">
        <h4 className="page-title">Company Profile</h4>
        <p className="page-description">Manage your company information and settings</p>
      </div>

      <Row>
        <Col xl={4} lg={5} md={12}>
          <Card className="custom-card">
            <Card.Body className="text-center">
              <div className="avatar avatar-xxl mx-auto mb-3">
                <img 
                  src={formData.logo || "/assets/images/faces/9.jpg"} 
                  alt="Company Logo" 
                  className="rounded-circle"
                  onError={(e) => {
                    e.currentTarget.src = "/assets/images/faces/9.jpg";
                  }}
                />
              </div>
              <h5 className="mb-1">{profile.name}</h5>
              <p className="text-muted mb-3">{profile.email}</p>
              <span className={`badge bg-${profile.isActive ? 'success' : 'danger'}-transparent`}>
                {profile.isActive ? 'Active' : 'Inactive'}
              </span>
              <div className="mt-4">
                {!editing ? (
                  <Button variant="primary" onClick={handleEdit} className="btn-wave">
                    <i className="ri-edit-line me-2"></i>Edit Profile
                  </Button>
                ) : (
                  <div className="d-flex gap-2 justify-content-center">
                    <Button variant="success" onClick={handleSave} disabled={loading} className="btn-wave">
                      <i className="ri-save-line me-2"></i>{loading ? 'Saving...' : 'Save'}
                    </Button>
                    <Button variant="light" onClick={handleCancel} className="btn-wave">
                      <i className="ri-close-line me-2"></i>Cancel
                    </Button>
                  </div>
                )}
              </div>
            </Card.Body>
          </Card>
        </Col>
        
        <Col xl={8} lg={7} md={12}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <Card.Title>
                <i className="ri-building-line me-2"></i>Company Information
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Form>
                <Row>
                  <Col xl={6} className="mb-3">
                    <Form.Label className="form-label text-default">Company Name *</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter company name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      disabled={!editing}
                      className="form-control"
                    />
                  </Col>
                  <Col xl={6} className="mb-3">
                    <Form.Label className="form-label text-default">Email Address *</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      disabled={!editing}
                      className="form-control"
                    />
                  </Col>
                  <Col xl={6} className="mb-3">
                    <Form.Label className="form-label text-default">Phone Number</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      disabled={!editing}
                      className="form-control"
                    />
                  </Col>
                  <Col xl={6} className="mb-3">
                    <Form.Label className="form-label text-default">GST Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter GST number"
                      value={formData.gstNumber}
                      onChange={(e) => setFormData({ ...formData, gstNumber: e.target.value })}
                      disabled={!editing}
                      className="form-control"
                    />
                  </Col>
                  <Col xl={12} className="mb-3">
                    <Form.Label className="form-label text-default">Address</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={2}
                      placeholder="Enter complete address"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      disabled={!editing}
                      className="form-control"
                    />
                  </Col>
                  <Col xl={4} className="mb-3">
                    <Form.Label className="form-label text-default">City</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter city"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      disabled={!editing}
                      className="form-control"
                    />
                  </Col>
                  <Col xl={4} className="mb-3">
                    <Form.Label className="form-label text-default">State</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter state"
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      disabled={!editing}
                      className="form-control"
                    />
                  </Col>
                  <Col xl={4} className="mb-3">
                    <Form.Label className="form-label text-default">Pin Code</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter pin code"
                      value={formData.pinCode}
                      onChange={(e) => setFormData({ ...formData, pinCode: e.target.value })}
                      disabled={!editing}
                      className="form-control"
                    />
                  </Col>
                  <Col xl={6} className="mb-3">
                    <Form.Label className="form-label text-default">Country</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter country"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      disabled={!editing}
                      className="form-control"
                    />
                  </Col>
                  <Col xl={6} className="mb-3">
                    <Form.Label className="form-label text-default">Logo URL</Form.Label>
                    <Form.Control
                      type="url"
                      placeholder="Enter logo URL"
                      value={formData.logo}
                      onChange={(e) => setFormData({ ...formData, logo: e.target.value })}
                      disabled={!editing}
                      className="form-control"
                    />
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;