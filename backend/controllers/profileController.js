import Profile from "../models/Profile.js";

export const createProfile = async (req, res) => {
  try {
    const { profileName, avatar, isKidsProfile } = req.body;
    const profile = await Profile.create({
      profileName,
      avatar,
      isKidsProfile,
      userId: req.user._id,
    });
    res.status(201).json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find({ userId: req.user._id });
    res.json(profiles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProfile = async (req, res) => {
  try {
    await Profile.findOneAndDelete({
      _id: req.params.id,
      userId: req.user._id,
    });
    res.json({ message: "Profile deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
