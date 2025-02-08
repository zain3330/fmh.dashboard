const departmentOptions = {
    Clinical: [
        {
            name: "Count",
            icon: "fa-chart-bar", // General counting/statistics icon
            submenu: [
                { name: "OPD Count", link: "finance-opd-count.html", icon: "fa-user-md" }, // Doctor/patient icon
                { name: "OPD Count- Allied Health Specialties", link: "finance-opd-count-ahs.html", icon: "fa-user-nurse" }, // Doctor/patient icon
                { name: "IPD Count", link: "finance-ipd-count.html", icon: "fa-procedures" }, // Bed icon
                { name: "EAR Count", link: "finance-ear-count.html", icon: "fa-users" }, // Group icon
            ],
        },
        {
            name: "Conversion to IPD",
            icon: "fa-exchange-alt", // Conversion/movement icon
            submenu: [
                { name: "Admission from OPD", link: "finance-admission-from-opd.html", icon: "fa-user-plus" }, // Admission icon
                { name: "Admission from EAR", link: "finance-admission-from-ear.html", icon: "fa-user-check" }, // Confirmation icon
            ],
        },
        {
            name: "Procedures",
            icon: "fa-stethoscope", // Medical procedures icon
            submenu: [
                { name: "Total FMH Procedures", link: "finance-total-procedures.html", icon: "fa-notes-medical" }, // Medical notes icon

            ],
        },
        {
            name: "Discharge Type",
            icon: "fa-hospital-user", // Medical procedures icon
            submenu: [
                { name: "EAR Discharge Type", link: "ear_discharge_type.html", icon: "fa-ear-listen" }, // Medical notes icon
                { name: "IPD Discharge Type", link: "ipd_discharge_type.html", icon: "fa-procedures" }, // Medical notes icon

            ],
        },

        {
            name: "Average Length Of Stay",
            link: "finance-als.html",
            icon: "fa-clock", // Time icon for length of stay
        },
        {
            name: "Bed Occupancy",
            link: "finance-bed-occupancy.html",
            icon: "fa-clinic-medical", // Hospital bed icon
        },
        {
            name: "Short Stay",
            link: "finance-short-stay.html",
            icon: "fa-user-clock", // Short stay/patient icon
        },
        {
            name: "C-Section",
            link: "c-section.html",
            icon: "fa fa-baby",
        },
        {
            name: "Normal Deliveries",
            link: "normal-deliveries.html",
            icon: "fa fa-hand-holding-heart",
        },
        {
            name: "Mortality",
            link: "mortality.html",
            icon: "fa fa-heartbeat", // New icon class
        },
        {
            "name": "Bed Detail",
            "link": "bed-detail.html",
            "icon": "fa fa-bed"
        },
        {
            "name": "EAR Calls to Consultant",
            "link": "ear-calls-to-consultant.html",
            "icon": "fa fa-phone"
        },
        {
            "name": "EAR Notes",
            "link": "ear-notes.html",
            "icon": "fa fa-sticky-note"
        }
    ],

    Corporate: [
        {
            name: "Billing Sheet",
            icon: "fa-stethoscope", // Medical procedures icon
            submenu: [
                { name: "Ipd Revenue", link: "ipd-revenue.html", icon: "fa-notes-medical" }, // Medical notes icon
                { name: "Ear Revenue", link: "ear-revenue.html", icon: "fa-notes-medical" },
                { name: "Opd Revenue", link: "opd-revenue.html", icon: "fa-notes-medical" },

            ],
        },
        {
            name: "Corporate Billing & Receipt",
            link: "finance-corporate-billing-receipt.html",
            icon: "fa-file-invoice-dollar", // Billing/receipt icon
        },
    ],
    Finance: [
        // {
        //     name: "General Ledger",
        //     link: "general-ledger.html",
        //     icon: "fa-book", // Changed to ledger/book icon (better for accounting)
        // },
        // {
        //     name: "Trial Balance",
        //     link: "trail-balance.html",
        //     icon: "fa-balance-scale", // Good choice (represents balance)
        // },
        // {
        //     name: "Debtor Aging Master",
        //     link: "debtor-aging-master.html",
        //     icon: "fa-hourglass-half", // Changed (aging/debt timing concept)
        // },
        // {
        //     name: "Client Receipt Adjustment",
        //     link: "client-receipt-adjustment.html",
        //     icon: "fa-hourglass-half",
        // },
        // {
        //     name: "SSP Refer Letter Data",
        //     link: "SSP-Refer-Letter-Data.html",
        //     icon: "fa-file-invoice", // Changed (better for financial documents)
        // },
    ]

};

