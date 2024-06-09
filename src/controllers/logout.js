export const logout = (req, res) => {
  try {
    res.cookie("token", "", { expires: new Date(0) });
    return res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
