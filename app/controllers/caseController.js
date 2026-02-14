import Case from "../models/Case.js";

export const createCase = async (req, res) => {

  const newCase = new Case(req.body);

  await newCase.save();

  res.status(201).json(newCase);

};

export const getCases = async (req, res) => {

  const cases =
    await Case.find()
      .populate("customerId");

  res.json(cases);

};

export const updateCase = async (req, res) => {

  const updated =
    await Case.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

  res.json(updated);

};
