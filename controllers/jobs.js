const getAllJobs = async (req, res) => {
  res.send("Get All Jobs");
};

const getJob = async (req, res) => {
  res.send("Get a single Job");
};

const createJob = async (req, res) => {
  res.send("create Job");
};

const updateJob = async (req, res) => {
  res.send(" update Job");
};

const deleteJob = async (req, res) => {
  res.send("delete Job");
};

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
};
