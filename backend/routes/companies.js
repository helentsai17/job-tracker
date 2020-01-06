const router = require('express').Router();
let Company = require('../models/companies.model'); // line for importing schma

router.route('/').get((req,res) => {
    Company.find()
    .then(companies => res.json(companies))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req,res)=> { 
    const CompanyName = req.body.CompanyName;
    const JobTitle = req.body.JobTitle;
    const JobRequire = req.body.JobRequire;
    const CompanyDescribe = req.body.CompanyDescribe;
    const JobStatus = req.body.JobStatus;
    const possibility = Boolean(req.body.possibility); 
    const date = Date.parse(req.body.date);

    const newCompany = new Company({
        CompanyName,
        JobTitle,
        JobRequire,
        CompanyDescribe,
        JobStatus,
        possibility,
        date
    });

    newCompany.save()
        .then(() => res.json('Job Apply added!!'))
        .catch(err => res.status(400).json('Error:' + err));

});

router.route('/:id').get((req,res)=> {
    Company.findById(req.params.id)
    .then(companies => res.json(companies))
    .catch(err => res.status(400).json('Error:' + err));
});//37:34

router.route('/:id').delete((req,res) => {
    Company.findByIdAndDelete(req.params.id)
    .then(() => res.json('job deleted.'))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/update/:id').post((req,res)=>{ //39:30
    Company.findById(req.params.id)
    .then(companies =>{
        companies.CompanyName = req.body.CompanyName;
        companies.JobTitle = req.body.JobTitle;
        companies.JobRequire = req.body.JobRequire;
        companies.CompanyDescribe = req.body.CompanyDescribe;
        companies.JobStatus = req.body.JobStatus;
        companies.possibility = Boolean(req.body.possibility);
        companies.date = Date.parse(req.body.date);

        companies.save()
            .then(()=> res.json("Company update!"))
            .catch(err => res.status(400).json('Error:' + err));


    })
    .catch(err => res.status(400).json('Error:' + err));
});

module.exports = router;