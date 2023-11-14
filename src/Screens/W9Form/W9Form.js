// import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import React, {useState} from 'react';
// import Header from '../../Components/Header/Header';
// // import Loader from '../../Components/Loader/Loader';
// import LoaderModel from '../../Components/DialogBox/LoaderBoxComponent';
// import {primary} from '../../Stylings/Colors';
// import {WebView} from 'react-native-webview';
// import RNHTMLtoPDF from 'react-native-html-to-pdf';
// import Pdf from 'react-native-pdf';

// const W9Form = () => {
//   const loading = false;
//   const [pdfPath, setPdfPath] = useState('');

//   const createPDF = async () => {
//     // setLoading(true);
//     // const source = require('./test.pdf'); // ios only
//         let options = {
//           html: `<div class="row">
//     <div class="small-12 large-3 columns">
//         <p>Form <strong>W-9</strong><br>
//             (Rev. December 2014)<br>
//             Department of the Treasury<br>
//             Internal Revenue Service</p>
//     </div>
//     <div class="small-12 large-6 columns">
//         <h2 align="center">Request for Taxpayer Identification Number and Certification</h2>
//     </div>
//     <div class="small-12 large-3 columns">
//         <p>Give Form to the requester. <br>
//             Do not send to the IRS.</p>
//     </div>
// </div>
// <hr />
// <fieldset>
//     <legend>1</legend>
//     <div class="row">
//         <label>Name (as shown on your income tax return). Name is required on this line; do not leave this line
//             blank.</label>
//         <label></label>
//     </div>
// </fieldset>
// <fieldset>
//     <legend>2</legend>
//     <div class="row">
//         <label>Business name/disregarded entity name, if different from above</label>

//         <input name="Business name" type="text" class="custom-input">
//     </div>
//     <p>Check appropriate box for federal tax classification: </p>
//     <fieldset>
//     </fieldset>
//     <fieldset>
//         <legend>3</legend>
//         <div class="row">
//             <div class="small-12 large-4 columns">
//                 <label>
//                     <input name="federal tax classification" type="radio"
//                         value="Individual/sole proprietor or single-member LLC" class="custom-input">
//                     Individual/sole proprietor or single-member LLC</label>
//             </div>
//             <div class="small-12 large-4 columns">
//                 <label>
//                     <input name="federal tax classification" type="radio" value="C Corporation" class="custom-input">
//                     C Corporation</label>
//             </div>
//             <div class="small-12 large-4 columns">
//                 <label>
//                     <input name="federal tax classification" type="radio" value="S Corporation" class="custom-input">
//                     S Corporation</label>
//             </div>
//         </div>
//         <div class="row">
//             <div class="small-12 large-4 columns">
//                 <label>
//                     <input name="federal tax classification" type="radio" value="Partnership" class="custom-input">
//                     Partnership</label>
//             </div>
//             <div class="small-12 large-4 columns end">
//                 <label>
//                     <input name="federal tax classification" type="radio" value="Trust/estate" class="custom-input">
//                     Trust/estate</label>
//             </div>
//         </div>
//         <div class="row">
//             <div class="small-12 large-4 columns">
//                 <label>
//                     <input name="federal tax classification" type="radio" value="Limited liability company"
//                         class="custom-input">
//                     Limited liability company</label>
//             </div>
//             <div class="small-12 large-8 columns">
//                 <label>Enter the tax classification ▶
//                     <select name="tax classification" class="custom-input">
//                         <option value="C">C corporation</option>
//                         <option value="S">S corporation</option>
//                         <option value="P">Partnership</option>
//                     </select>
//                 </label>
//             </div>
//         </div>
//         <div class="row">
//             <div class="small-12 large-12 columns">
//                 <strong>Note.</strong> For a single-member LLC that is disregarded, do not check LLC; check the
//                 appropriate box in the line above for
//                 the tax classification of the single-member owner.
//             </div>
//         </div>
//         <div class="row">
//             <div class="small-12 large-4 columns">
//                 <label>
//                     <input name="federal tax classification" type="radio" value="Other" class="custom-input">
//                     Other</label>
//             </div>
//             <div class="small-12 large-8 columns">
//                 <label>(<a href="#Other_entities">see instructions below</a>) ▶
//                     <input name="Other federal tax classification" type="text" class="custom-input" /></label>
//             </div>
//         </div>
//     </fieldset>
//     <fieldset>
//         <legend>4</legend>
//         <div class="row">
//             <div class="small-12 large-6 columns">
//                 Exemptions (codes apply only to certain entities, not individuals; see instructions on page 3):
//                 <label>Exempt payee code (if any)
//                     <select name="Exempt payee code">
//                         <option value="" selected></option>
//                         <option value="1">1</option>
//                         <option value="2">2</option>
//                         <option value="3">3</option>
//                         <option value="4">4</option>
//                         <option value="5">5</option>
//                         <option value="6">6</option>
//                         <option value="7">7</option>
//                         <option value="8">8</option>
//                         <option value="9">9</option>
//                         <option value="10">10</option>
//                         <option value="11">11</option>
//                         <option value="12">12</option>
//                         <option value="13">13</option>
//                         <option value="14">14</option>
//                     </select>
//                 </label>
//             </div>
//             <div class="small-12 large-6 columns">
//                 Exemptions (codes apply only to certain entities, not individuals; see instructions on page 3):
//                 <label>Exemption from FATCA reporting code (if any)
//                     <select name="Exemption from FATCA reporting code">
//                         <option value="" selected></option>
//                         <option value="1">1</option>
//                         <option value="2">2</option>
//                         <option value="3">3</option>
//                         <option value="4">4</option>
//                         <option value="5">5</option>
//                         <option value="6">6</option>
//                         <option value="7">7</option>
//                         <option value="8">8</option>
//                         <option value="9">9</option>
//                         <option value="10">10</option>
//                         <option value="11">11</option>
//                         <option value="12">12</option>
//                         <option value="13">13</option>
//                         <option value="14">14</option>
//                     </select>
//                 </label>
//                 <em>(Applies to accounts maintained outside the U.S.)</em>
//             </div>
//         </div>
//     </fieldset>
//     <fieldset>
//         <legend>5</legend>
//         <div class="row">
//             <div class="small-12 large-12 columns">
//                 <label>Address (number, street, and apt. or suite no.)</label>
//                 <input name="Address" type="text" class="custom-input" data-required="required">
//             </div>
//         </div>
//     </fieldset>
//     <fieldset>
//         <legend>6</legend>
//         <div class="row">
//             <div class="small-12 large-12 columns">
//                 <label>City, state, and ZIP code</label>
//                 <input name="City, state, and ZIP code" type="text" class="custom-input" data-required="required">
//             </div>
//         </div>
//     </fieldset>
//     <fieldset>
//         <div class="row">
//             <div class="small-12 large-12 columns">
//                 <label>Requester’s name and address (optional)</label>
//                 <input class="placeholder-text-area" height="75" name="Requester’s name and address">
//             </div>
//         </div>
//     </fieldset>
//     <fieldset>
//         <legend>7</legend>
//         <div class="row">
//             <div class="small-12 large-12 columns">
//                 <label>List account number(s) here (optional)</label>
//                 <input name="account numbers" type="text" class="custom-input">
//             </div>
//         </div>
//     </fieldset>
//     <h3><strong>Part I</strong> Taxpayer Identification Number (TIN)</h3>
//     <div class="row">
//         <div class="small-12 large-6 columns">
//             <p>Enter your TIN in the appropriate box. The TIN provided must match the name given on the “Name” line to
//                 avoid backup withholding. For individuals, this is your social security number (SSN). However, for a
//                 resident alien, sole proprietor, or disregarded entity, see the Part I instructions on page 3. For other
//                 entities, it is your employer identification number (EIN). If you do not have a number, see How to get a
//                 TIN on page 3.</p>
//             <p><strong>Note.</strong> If the account is in more than one name, see the chart on page 4 for guidelines on
//                 whose number to enter.</p>
//         </div>
//         <div class="small-12 large-6 columns">
//             <div class="row">
//                 <label>Social security number:</label>
//                 <input name="Social security number" type="ssn">
//             </div>
//             <div class="row">
//                 <label>Employer identification number:</label>
//                 <input name="Employer identification number" type="ein">
//             </div>
//         </div>
//     </div>
//     </div>
//     <h3> <strong>Part II</strong> Certification</h3>
//     <p>Under penalties of perjury, I certify that:</p>
//     <p>1. The number shown on this form is my correct taxpayer identification number (or I am waiting for a number to be
//         issued to me), and</p>
//     <p>2. I am not subject to backup withholding because: (a) I am exempt from backup withholding, or (b) I have not
//         been notified by the Internal Revenue Service (IRS) that I am subject to backup withholding as a result of a
//         failure to report all interest or dividends, or (c) the IRS has notified me that I am no longer subject to
//         backup withholding, and</p>
//     <p>3. I am a U.S. citizen or other U.S. person (defined below).</p>
//     <p><strong>Certification instructions. </strong>You must cross out item 2 above if you have been notified by the IRS
//         that you are currently subject to backup withholding because you have failed to report all interest and
//         dividends on your tax return. For real estate transactions, item 2 does not apply. For mortgage interest paid,
//         acquisition or abandonment of secured property, cancellation of debt, contributions to an individual retirement
//         arrangement (IRA), and generally, payments other than interest and dividends, you are not required to sign the
//         certification, but you must provide your correct TIN. <a href="#Part_II_Certification">See the instructions
//             below</a>.</p>
//     <h3>Sign Here<img width="100%" class="placeholder-signing-line"
//             src="/assets/sign-line-editor-graphic-2fb6d67c8a5a7d0acc07baf78cc08807.png" height="194"></h3>
//     <h2>General Instructions</h2>
//     <p>Section references are to the Internal Revenue Code unless otherwise noted.</p>
//     <h3>Purpose of Form</h3>
//     <p>A person who is required to file an information return with the IRS must obtain your correct taxpayer
//         identification number (TIN) to report, for example, income paid to you, real estate transactions, mortgage
//         interest you paid, acquisition or abandonment of secured property, cancellation of debt, or contributions you
//         made to an IRA.</p>
//     <p>Use Form W-9 only if you are a U.S. person (including a resident alien), to provide your correct TIN to the
//         person requesting it (the requester) and, when applicable, to:</p>
//     <ol>
//         <li>Certify that the TIN you are giving is correct (or you are waiting for a number to be issued),</li>
//         <li>Certify that you are not subject to backup withholding, or</li>
//         <li>Claim exemption from backup withholding if you are a U.S. exempt payee. If applicable, you are also
//             certifying that as a U.S. person, your allocable share of any partnership income from a U.S. trade or
//             business is not subject to the withholding tax on foreign partners’ share of effectively connected income.
//         </li>
//     </ol>
//     <p><strong>Note.</strong> If a requester gives you a form other than Form W-9 to request your TIN, you must use the
//         requester’s form if it is substantially similar to this Form W-9.</p>
//     <p><strong>Definition of a U.S. person.</strong> For federal tax purposes, you areconsidered a U.S. person if you
//         are:</p>
//     <ul>
//         <li>An individual who is a U.S. citizen or U.S. resident alien,</li>
//         <li>A partnership, corporation, company, or association created or </li>
//         <li>organized in the United States or under the laws of the United States,</li>
//         <li>An estate (other than a foreign estate), or</li>
//         <li>A domestic trust (as defined in Regulations section 301.7701-7).</li>
//     </ul>
//     <p><strong><a name="Special_rules_for_partnerships">Special rules for partnerships.</a></strong> Partnerships that
//         conduct a trade or business in the United States are generally required to pay a withholding tax on any foreign
//         partners’ share of income from such business.<br>
//         Further, in certain cases where a Form W-9 has not been received, a partnership is required to presume that a
//         partner is a foreign person, and pay the withholding tax. Therefore, if you are a U.S. person that is a partner
//         in a partnership conducting a trade or business in the United States, provide Form W-9 to the partnership to
//         establish your U.S.status and avoid withholding on your share of partnership income</p>
//     <p>The person who gives Form W-9 to the partnership for purposes of establishing its U.S. status and avoiding
//         withholding on its allocable share of net income from the partnership conducting a trade or business in the
//         United States is in the following cases:</p>
//     <ul>
//         <li>The U.S. owner of a disregarded entity and not the entity,</li>
//         <li>The U.S. grantor or other owner of a grantor trust and not the trust, and</li>
//         <li>The U.S. trust (other than a grantor trust) and not the beneficiaries of the trust.</li>
//     </ul>
//     <p><strong>Foreign person. </strong>If you are a foreign person, do not use Form W-9. Instead, use the appropriate
//         Form W-8 (see Publication 515, Withholding of Tax on Nonresident Aliens and Foreign Entities).</p>
//     <p><strong>Nonresident alien who becomes a resident alien.</strong> Generally, only a nonresident alien individual
//         may use the terms of a tax treaty to reduce or eliminate U.S. tax on certain types of income. However, most tax
//         treaties contain a provision known as a “saving clause.” Exceptions specified in the saving clause may permit an
//         exemption from tax to continue for certain types of income even after the payee has otherwise become a U.S.
//         resident alien for tax purposes.</p>
//     <p>If you are a U.S. resident alien who is relying on an exception contained in the saving clause of a tax treaty to
//         claim an exemption from U.S. tax on certain types of income, you must attach a statement to Form W-9 that
//         specifies the following five items:</p>
//     <ol>
//         <li>The treaty country. Generally, this must be the same treaty under which you claimed exemption from tax as a
//             nonresident alien.</li>
//         <li>The treaty article addressing the income.</li>
//         <li>The article number (or location) in the tax treaty that contains the saving clause and its exceptions.</li>
//         <li>The type and amount of income that qualifies for the exemption from tax.</li>
//         <li>Sufficient facts to justify the exemption from tax under the terms of the treaty article.</li>
//     </ol>
//     <p><strong><em>Example.</em></strong> Article 20 of the U.S.-China income tax treaty allows an exemption from tax
//         for scholarship income received by a Chinese student temporarily present in the United States. Under U.S. law,
//         this student will become a resident alien for tax purposes if his or her stay in the United States exceeds 5
//         calendar years. However, paragraph 2 of the first Protocol to the U.S.-China treaty (dated April 30, 1984)
//         allows the provisions of Article 20 to continue to apply even after the Chinese student becomes a resident alien
//         of the United States. A Chinese student who qualifies for this exception (under paragraph 2 of the first
//         protocol) and is relying on this exception to claim an exemption from tax on his or her scholarship or
//         fellowship income would attach to Form W-9 a statement that includes the information described above to support
//         that exemption.</p>
//     <p>If you are a nonresident alien or a foreign entity not subject to backup withholding, give the requester the
//         appropriate completed Form W-8.</p>
//     <p><strong>What is backup withholding?</strong> Persons making certain payments to you must under certain conditions
//         withhold and pay to the IRS a percentage of such payments. This is called “backup withholding.” Payments that
//         may be subject to backup withholding include interest, tax-exempt interest, dividends, broker and barter
//         exchange transactions, rents, royalties, nonemployee pay, and certain payments from fishing boat operators. Real
//         estate transactions are not subject to backup withholding.</p>
//     <p>You will not be subject to backup withholding on payments you receive if you give the requester your correct TIN,
//         make the proper certifications, and report all your taxable interest and dividends on your tax return.</p>
//     <p><strong>Payments you receive will be subject to backup withholding if:</strong></p>
//     <ol>
//         <li>You do not furnish your TIN to the requester,</li>
//         <li>You do not certify your TIN when required (<a href="#Part_II_Certification">see the Part II instructions
//                 below for details</a>),</li>
//         <li>The IRS tells the requester that you furnished an incorrect TIN,</li>
//         <li>The IRS tells you that you are subject to backup withholding because you did not report all your interest
//             and dividends on your tax return (for reportable interest and dividends only), or</li>
//         <li>You do not certify to the requester that you are not subject to backup withholding under 4 above (for
//             reportable interest and dividend accounts opened after 1983 only).</li>
//     </ol>
//     <p>Certain payees and payments are exempt from backup withholding. See the instructions below and the separate
//         Instructions for the Requester of Form W-9.</p>
//     <p>Also see <a href="#Special_rules_for_partnerships"><em>Special rules for partnerships (above).</em></a><em></em>
//     </p>
//     <h3>Updating Your Information</h3>
//     <p>You must provide updated information to any person to whom you claimed to be an exempt payee if you are no longer
//         an exempt payee and anticipate receiving reportable payments in the future from this person. For example, you
//         may need to provide updated information if you are a C corporation that elects to be an S corporation, or if you
//         no longer are tax exempt. In addition, you must furnish a new Form W-9 if the name or TIN changes for the
//         account, for example, if the grantor of a grantor trust dies.</p>
//     <h3>Penalties</h3>
//     <p><strong>Failure to furnish TIN.</strong> If you fail to furnish your correct TIN to a requester, you are subject
//         to a penalty of $50 for each such failure unless your failure is due to reasonable cause and not to willful
//         neglect.</p>
//     <p><strong>Civil penalty for false information with respect to withholding.</strong> If you make a false statement
//         with no reasonable basis that results in no backup withholding, you are subject to a $500 penalty.</p>
//     <p><strong>Criminal penalty for falsifying information. </strong>Willfully falsifying certifications or affirmations
//         may subject you to criminal penalties including fines and/or imprisonment.</p>
//     <p><strong>Misuse of TINs.</strong> If the requester discloses or uses TINs in violation of federal law, the
//         requester may be subject to civil and criminal penalties.</p>
//     <h2>Specific Instructions</h2>
//     <h3>Name</h3>
//     <p>If you are an individual, you must generally enter the name shown on your income tax return. However, if you have
//         changed your last name, for instance, due to marriage without informing the Social Security Administration of
//         the name change, enter your first name, the last name shown on your social security card, and your new last
//         name.</p>
//     <p>If the account is in joint names, list first, and then circle, the name of the person or entity whose number you
//         entered in Part I of the form.</p>
//     <p><strong><a name="Sole_proprietor">Sole proprietor.</a></strong> Enter your individual name as shown on your
//         income tax return on the “Name” line. You may enter your business, trade, or “doing business as (DBA)” name on
//         the “Business name/disregarded entity name” line.</p>
//     <p><strong><a name="Partnership_C_S">Partnership, C Corporation, or S Corporation.</a></strong> Enter the entity's
//         name on the “Name” line and any business, trade, or “doing business as (DBA) name” on the “Business
//         name/disregarded entity name” line.</p>
//     <p><strong><a name="Disregarded%20entity">Disregarded entity.</a></strong>Enter the owner's name on the “Name” line.
//         The name of the entity entered on the “Name” line should never be a disregarded entity. The name on the “Name”
//         line must be the name shown on the income tax return on which the income will be reported. </p>
//     <p>For example, if a foreign LLC that is treated as a disregarded entity for U.S. federal tax purposes has a
//         domestic owner, the domestic owner's name is required to be provided on the “Name” line. If the direct owner of
//         the entity is also a disregarded entity, enter the first owner that is not disregarded for federal tax purposes.
//         Enter the disregarded entity's name on the “Business name/disregarded entity name” line. If the owner of the
//         disregarded entity is a foreign person, you must complete an appropriate Form W-8. </p>
//     <p><strong>Note.</strong> Check the appropriate box for the federal tax classification of the person whose name is
//         entered on the “Name” line (Individual/sole proprietor, Partnership, C Corporation, S Corporation,
//         Trust/estate).</p>
//     <p><strong><a name="LLC">Limited Liability Company (LLC).</a></strong> If the person identified on the “Name” line
//         is an LLC, check the “Limited liability company” box only and enter the appropriate code for the tax
//         classification in the space provided. If you are an LLC that is treated as a partnership for federal tax
//         purposes, enter “P” for partnership. If you are an LLC that has filed a Form 8832 or a Form 2553 to be taxed as
//         a corporation, enter “C” for C corporation or “S” for S corporation. If you are an LLC that is disregarded as an
//         entity separate from its owner under Regulation section 301.7701-3 (except for employment and excise tax), do
//         not check the LLC box unless the owner of the LLC (required to be identified on the “Name” line) is another LLC
//         that is not disregarded for federal tax purposes. If the LLC is disregarded as an entity separate from its
//         owner, enter the appropriate tax classification of the owner identified on the “Name” line.</p>
//     <p><strong><a name="Other_entities">Other entities.</a></strong> Enter your business name as shown on required
//         federal tax documents on the “Name” line. This name should match the name shown on the charter or other legal
//         document creating the entity. You may enter any business, trade, or DBA name on the “Business name/disregarded
//         entity name” line.</p>
//     <h3><a name="Exempt_Payee">Exempt Payee</a></h3>
//     <p>If you are exempt from backup withholding, enter your name as described above and check the appropriate box for
//         your status, then check the “Exempt payee” box in the line following the “Business name/disregarded entity
//         name,” sign and date the form.</p>
//     <p>Generally, individuals (including sole proprietors) are not exempt from backup withholding. Corporations are
//         exempt from backup withholding for certain payments, such as interest and dividends.</p>
//     <p><strong>Note.</strong> If you are exempt from backup withholding, you should still complete this form to avoid
//         possible erroneous backup withholding.</p>
//     <p>The following payees are exempt from backup withholding:</p>
//     <ol>
//         <li>An organization exempt from tax under section 501(a), any IRA, or a custodial account under section
//             403(b)(7) if the account satisfies the requirements of section 401(f)(2),</li>
//         <li>The United States or any of its agencies or instrumentalities,</li>
//         <li>A state, the District of Columbia, a possession of the United States, or any of their political subdivisions
//             or instrumentalities,</li>
//         <li>A foreign government or any of its political subdivisions, agencies, or instrumentalities, or</li>
//         <li>An international organization or any of its agencies or instrumentalities.</li>
//     </ol>
//     <p>Other payees that may be exempt from backup withholding include:</p>
//     <ol start="6">
//         <li>A corporation,</li>
//         <li>A foreign central bank of issue,</li>
//         <li>A dealer in securities or commodities required to register in the United States, the District of Columbia,
//             or a possession of the United States,</li>
//         <li>A futures commission merchant registered with the Commodity Futures Trading Commission,</li>
//         <li>A real estate investment trust,</li>
//         <li>An entity registered at all times during the tax year under the Investment Company Act of 1940,</li>
//         <li>A common trust fund operated by a bank under section 584(a),</li>
//         <li>A financial institution,</li>
//         <li>A middleman known in the investment community as a nominee or custodian, or</li>
//         <li>A trust exempt from tax under section 664 or described in section 4947.</li>
//     </ol>
//     <p>The following chart shows types of payments that may be exempt from backup withholding. The chart applies to the
//         exempt payees listed above, 1 through 15.</p>
//     <table>
//         <caption align="bottom">
//             <sup>1</sup> See Form 1099-MISC, Miscellaneous Income, and its instructions.<br>
//             <sup>2</sup> However, the following payments made to a corporation and reportable on Form 1099-MISC are not
//             exempt from backup withholding: medical and health care payments, attorneys' fees, gross proceeds paid to an
//             attorney, and payments for services paid by a federal executive agency.
//         </caption>
//         <tbody>
//             <tr>
//                 <th>IF the payment is for . . . </th>
//                 <th>THEN the payment is exempt for . . .</th>
//             </tr>
//             <tr>
//                 <td>Interest and dividend payments</td>
//                 <td>All exempt payees except for 9</td>
//             </tr>
//             <tr>
//                 <td>Broker transactions</td>
//                 <td>Exempt payees 1 through 5 and 7 through 13. Also, C corporations.</td>
//             </tr>
//             <tr>
//                 <td>Barter exchange transactions and patronage dividends</td>
//                 <td>Exempt payees 1 through 5</td>
//             </tr>
//             <tr>
//                 <td>Payments over $600 required to be reported and direct sales over $5,000 <sup>1</sup></td>
//                 <td>Generally, exempt payees 1 through 7 <sup>2</sup></td>
//             </tr>
//         </tbody>
//     </table>
//     <h3>Part I. Taxpayer Identification Number (TIN)</h3>
//     <p>Enter your TIN in the appropriate box. If you are a resident alien and you do not have and are not eligible to
//         get an SSN, your TIN is your IRS individual taxpayer identification number (ITIN). Enter it in the social
//         security number box. If you do not have an ITIN, see How to get a TIN below.</p>
//     <p>If you are a sole proprietor and you have an EIN, you may enter either your SSN or EIN. However, the IRS prefers
//         that you use your SSN.</p>
//     <p>If you are a single-member LLC that is disregarded as an entity separate from its owner (see Limited Liability
//         Company (LLC) on page 2), enter the owner’s SSN (or EIN, if the owner has one). Do not enter the disregarded
//         entity’s EIN. If the LLC is classified as a corporation or partnership, enter the entity’s EIN.</p>
//     <p><strong>Note.</strong> See the chart on page 4 for further clarification of name and TIN combinations.</p>
//     <p><strong>How to get a TIN.</strong> If you do not have a TIN, apply for one immediately. To apply for an SSN, get
//         Form SS-5, Application for a Social Security Card, from your local Social Security Administration office or get
//         this form online at <a href="http://www.ssa.gov/"><em>www.ssa.gov</em></a>. You may also get this form by
//         calling 1-800-772-1213. Use Form W-7, Application for IRS Individual Taxpayer </p>
//     <p>Identification Number, to apply for an ITIN, or Form SS-4, Application for Employer Identification Number, to
//         apply for an EIN. You can apply for an EIN online by accessing the IRS website at <a
//             href="http://www.irs.gov/businesses/"><em>www.irs.gov/businesses</em></a> and clicking on Employer
//         Identification Number (EIN) under Starting a Business. You can get Forms W-7 and SS-4 from the IRS by visiting
//         <a href="http://irs.gov/">IRS.gov</a> or by calling 1-800-TAX-FORM (1-800-829-3676).</p>
//     <p>If you are asked to complete Form W-9 but do not have a TIN, write “Applied For” in the space for the TIN, sign
//         and date the form, and giveit to the requester. For interest and dividend payments, and certain payments made
//         with respect to readily tradable instruments, generally you will have 60 days to get a TIN and give it to the
//         requester before you are subject to backup withholding on payments. The 60-day rule does not apply to other
//         types of payments. You will be subject to backup withholding on all such payments until you provide your TIN to
//         the requester.</p>
//     <p><strong>Note. </strong>Entering “Applied For” means that you have already applied for a TIN or that you intend to
//         apply for one soon.</p>
//     <p><strong>Caution:</strong> A disregarded domestic entity that has a foreign owner must use the appropriate Form
//         W-8.</p>
//     <h3><a name="Part_II_Certification">Part II. Certification</a></h3>
//     <p>To establish to the withholding agent that you are a U.S. person, or resident alien, sign Form W-9. You may be
//         requested to sign by the withholding agent even if item 1, below, and items 4 and 5 on page 4 indicate
//         otherwise.</p>
//     <p>For a joint account, only the person whose TIN is shown in Part I should sign (when required). In the case of a
//         disregarded entity, the person identified on the “Name” line must sign. Exempt payees, see <a
//             href="#Exempt_Payee">Exempt Payee above</a>.</p>
//     <p>Signature requirements. Complete the certification as indicated in items 1 through 3, below, and items 4 and 5 on
//         page 4.</p>
//     <p><strong>1. Interest, dividend, and barter exchange accounts opened before 1984 and broker accounts considered
//             active during 1983.</strong> You must give your correct TIN, but you do not have to sign the certification.
//     </p>
//     <p><strong>2. Interest, dividend, broker, and barter exchange accounts opened after 1983 and broker accounts
//             considered inactive during 1983.</strong> You must sign the certification or backup withholding will apply.
//         If you are subject to backup withholding and you are merely providing your correct TIN to the requester, you
//         must cross out item 2 in the certification before signing the form.</p>
//     <p><strong>3. Real estate transactions.</strong> You must sign the certification. You may cross out item 2 of the
//         certification</p>
//     <p><strong>4. Other payments.</strong> You must give your correct TIN, but you do not have to sign the certification
//         unless you have been notified that you have previously given an incorrect TIN. “Other payments” include payments
//         made in the course of the requester’s trade or business for rents, royalties, goods (other than bills for
//         merchandise), medical and health care services (including payments to corporations), payments to a nonemployee
//         for services, payments to certain fishing boat crew members and fishermen, and gross proceeds paid to attorneys
//         (including payments to corporations).</p>
//     <p><strong>5. Mortgage interest paid by you, acquisition or abandonment of secured property, cancellation of debt,
//             qualified tuition program payments (under section 529), IRA, Coverdell ESA, Archer MSA or HSA contributions
//             or distributions, and pension distributions.</strong> You must give your correct TIN, but you do not have to
//         sign the certification</p>
//     <h3>What Name and Number To Give the Requester</h3>
//     <table>
//         <caption align="bottom">
//             <sup>1</sup> List first and circle the name of the person whose number you furnish. If only one personon a
//             joint account has an SSN, that person’s number must be furnished.<br>
//             <sup>2</sup> Circle the minor’s name and furnish the minor’s SSN.<br>
//             <sup>3</sup> You must show your individual name and you may also enter your business or “DBA” name on the
//             “Business name/disregarded entity” name line. You may use either your SSN or EIN (if you have one),but the
//             IRS encourages you to use your SSN.<br>
//             <sup>4</sup> List first and circle the name of the trust, estate, or pension trust. (Do not furnish the
//             TINof the personal representative or trustee unless the legal entity itself is not designated inthe account
//             title.) Also <a href="#Special_rules_for_partnerships">see Special rules for partnerships above</a>.<br>
//             <strong>*Note.</strong> Grantor also must provide a Form W-9 to trustee of trust
//         </caption>
//         <tbody>
//             <tr>
//                 <th>For this type of account:</th>
//                 <th>Give name and SSN of:</th>
//             </tr>
//             <tr>
//                 <td>1. Individual</td>
//                 <td>The individual</td>
//             </tr>
//             <tr>
//                 <td>2. Two or more individuals (joint account)</td>
//                 <td>The actual owner of the account or, if combined funds, the first individual on the account
//                     <sup>1</sup></td>
//             </tr>
//             <tr>
//                 <td>3. Custodian account of a minor (Uniform Gift to Minors Act)</td>
//                 <td>The minor <sup>2</sup></td>
//             </tr>
//             <tr>
//                 <td>4. a. The usual revocable savings trust (grantor is also trustee)</td>
//                 <td>The grantor-trustee <sup>1</sup></td>
//             </tr>
//             <tr>
//                 <td>4. b. So-called trust account that is not a legal or valid trust under state law</td>
//                 <td>The actual owner <sup>1</sup></td>
//             </tr>
//             <tr>
//                 <td>
//                     <p>5. Sole proprietorship or disregarded entity owned by an individual</p>
//                 </td>
//                 <td>The owner <sup>3</sup></td>
//             </tr>
//             <tr>
//                 <td>6. Grantor trust filing under Optional Form 1099 Filing Method <sup>1</sup> (see Regulation section
//                     1.671-4(b)(2)(i)(A))</td>
//                 <td>The grantor*</td>
//             </tr>
//             <tr>
//                 <th>For this type of account:</th>
//                 <th>Give name and EIN of:</th>
//             </tr>
//             <tr>
//                 <td>7. Disregarded entity not owned by an individual</td>
//                 <td>The owner</td>
//             </tr>
//             <tr>
//                 <td>8. A valid trust, estate, or pension trust </td>
//                 <td>Legal entity <sup>4</sup></td>
//             </tr>
//             <tr>
//                 <td>9. Corporation or LLC electing corporate status on Form 8832 or Form 2553</td>
//                 <td>The corporation</td>
//             </tr>
//             <tr>
//                 <td>10. Association, club, religious, charitable, educational, or other tax-exempt organization&gt;</td>
//                 <td>The organization</td>
//             </tr>
//             <tr>
//                 <td>11. Partnership or multi-member LLC </td>
//                 <td>The partnership</td>
//             </tr>
//             <tr>
//                 <td>12. A broker or registered nominee</td>
//                 <td>The broker or nominee</td>
//             </tr>
//             <tr>
//                 <td>13. Account with the Department of Agriculture in the name of a public entity (such as a state or
//                     local government, school district, or prison) that receives agricultural program payments</td>
//                 <td>The public entity</td>
//             </tr>
//             <tr>
//                 <td>14. Grantor trust filing under the Form 1041 Filing Method or the Optional Form 1099 Filing Method 2
//                     (see Regulation section 1.671-4(b)(2)(i)(B))</td>
//                 <td>The trust</td>
//             </tr>
//         </tbody>
//     </table>
//     <p><strong>Note. </strong>If no name is circled when more than one name is listed, the number will be considered to
//         be that of the first name listed.</p>
//     <h3>Secure Your Tax Records from Identity Theft</h3>
//     <p>Identity theft occurs when someone uses your personal information such as your name, social security number
//         (SSN), or other identifying information, without your permission, to commit fraud or other crimes. </p>
//     <p>An identity thief may use your SSN to get a job or may file a tax return using your SSN to receive a refund.</p>
//     <p>To reduce your risk:</p>
//     <ul>
//         <li>Protect your SSN,</li>
//         <li>Ensure your employer is protecting your SSN, and</li>
//         <li>Be careful when choosing a tax preparer.</li>
//     </ul>
//     <p>If your tax records are affected by identity theft and you receive a notice from the IRS, respond right away to
//         the name and phone number printed on the IRS notice or letter.</p>
//     <p>If your tax records are not currently affected by identity theft but you think you are at risk due to a lost or
//         stolen purse or wallet, questionable credit card activity or credit report, contact the IRS Identity Theft
//         Hotline at 1-800-908-4490 or submit Form 14039.</p>
//     <p>For more information, see Publication 4535, Identity Theft Prevention and Victim Assistance.</p>
//     <p>Victims of identity theft who are experiencing economic harm or a system problem, or are seeking help in
//         resolving tax problems that have not been resolved through normal channels, may be eligible for Taxpayer
//         Advocate Service (TAS) assistance. You can reach TAS by calling the TAS toll-free case intake line at
//         1-877-777-4778 or TTY/TDD 1-800-829-4059.</p>
//     <p><strong>Protect yourself from suspicious emails or phishing schemes. </strong></p>
//     <p>Phishing is the creation and use of email and websites designed to mimic legitimate business emails and websites.
//         The most common act is sending an email to a user falsely claiming to be an established legitimate enterprise in
//         an attempt to scam the user into surrendering private information that will be used for identity theft.</p>
//     <p>The IRS does not initiate contacts with taxpayers via emails. Also, the IRS does not request personal detailed
//         information through email or ask taxpayers for the PIN numbers, passwords, or similar secret access information
//         for their credit card, bank, or other financial accounts.</p>
//     <p>If you receive an unsolicited email claiming to be from the IRS, forward this message to <a
//             href="mailto:phishing@irs.gov">phishing@irs.gov</a>. You may also report misuse of the IRS name, logo, or
//         other IRS property to the Treasury Inspector General for Tax Administration at 1-800-366-4484. You can forward
//         suspicious emails to the Federal Trade Commission at: <a href="mailto:spam@uce.gov">spam@uce.gov</a> or contact
//         them at <a href="http://www.ftc.gov/idtheft/">www.ftc.gov/idtheft</a> or 1-877-IDTHEFT (1-877-438-4338).</p>
//     <p>Visit <a href="http://irs.gov/">IRS.gov</a> to learn more about identity theft and how to reduce your risk.</p>
//     <hr>
//     <h3>Privacy Act Notice</h3>
//     <p>Section 6109 of the Internal Revenue Code requires you to provide your correct TIN to persons (including federal
//         agencies) who are required to file information returns with the IRS to report interest, dividends, or certain
//         other income paid to you; mortgage interest you paid; the acquisition or abandonment of secured property; the
//         cancellation of debt; or contributions you made to an IRA, Archer MSA, or HSA. The person collecting this form
//         uses the information on the form to file information returns with the IRS, reporting the above information.
//         Routine uses of this information include giving it to the Department of Justice for civil and criminal
//         litigation and to cities, states, the District of Columbia, and U.S. possessions for use in administering their
//         laws. The information also may be disclosed to other countries under a treaty, to federal and state agencies to
//         enforce civil and criminal laws, or to federal law enforcement and intelligence agencies to combat terrorism.
//         You must provide your TIN whether or not you are required to file a tax return. Under section 3406, payers must
//         generally withhold a percentage of taxable interest, dividend, and certain other payments to a payee who does
//         not give a TIN to the payer. Certain penalties may also apply for providing false or fraudulent information.</p>`,
//         };

//     const source =
//     require('../../../assets/W9Form(2007).html')
//     console.log(source);
//     // let file = await RNHTMLtoPDF.convert(source);
//     // setPdfPath(file.filePath);

//     // console.log(file);
//   };
//   if (pdfPath) {
//     return (
//       <View style={{flex: 1}}>
//         <Pdf
//           showsHorizontalScrollIndicator={true}
//           horizontal={true}
//           source={{uri: pdfPath}}
//           onLoadComplete={numberOfPages => {
//             console.log(`Number of pages: ${numberOfPages}`);
//           }}
//           onPageChanged={(page, numberOfPages) => {
//             console.log(`Current page: ${page}`);
//           }}
//           onError={error => {
//             console.log(error);
//           }}
//           style={{width: '90%', height: 400, alignSelf: 'center'}}
//         />
//       </View>
//     );
//   } else {
//     return (
//       <WebView
//         source={require('../../../assets/W9Form(2007).html')}
//         style={{flex: 1, justifyContent: 'center'}}>
//         <TouchableOpacity
//           onPress={() => {
//             createPDF();
//           }}
//           style={{justifyContent: 'center', alignItems: 'center'}}>
//           <Text style={{fontSize: 20, fontFamily: 'bold', color: 'red'}}>
//             Button
//           </Text>
//         </TouchableOpacity>
//       </WebView>
//       // <View styl={{flex: 1}}>
//       //   <LoaderModel isVisible={loading} color={primary} />
//       //   <Header
//       //     Header_Title={'Notification'}
//       //     onPress={() => props.navigation.navigate('Home_Screen')}
//       //   />
//       //   {/* <View> */}
//       //   <WebView
//       //     source={{
//       //       uri: 'https://reactnative.dev/',
//       //     }}
//       //     style={{flex: 1, justifyContent: 'center'}}
//       //   />
//       //   {/* </View> */}
//       // </View>
//     );
//   }
// };

// export default W9Form;
import React, {useState} from 'react';
import {WebView} from 'react-native-webview';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import {TouchableOpacity, Vibration, View} from 'react-native';
import Pdf from 'react-native-pdf';
import {Text} from 'react-native-svg';

const W9Form = () => {
  const [filledHtml, setFilledHtml] = useState('');
  const [pdf, setPdf] = useState();
  const htmlContent = `<div class="row">
    <div class="small-12 large-3 columns">
        <p>Form <strong>W-9</strong><br>
            (Rev. December 2014)<br>
            Department of the Treasury<br>
            Internal Revenue Service</p>
    </div>
    <div class="small-12 large-6 columns">
        <h2 align="center">Request for Taxpayer Identification Number and Certification</h2>
    </div>
    <div class="small-12 large-3 columns">
        <p>Give Form to the requester. <br>
            Do not send to the IRS.</p>
    </div>
</div>
<hr />
<fieldset>
    <legend>1</legend>
    <div class="row">
        <label>Name (as shown on your income tax return). Name is required on this line; do not leave this line
            blank.</label>
          
                <form id="myForm">
          <input type="text" id="input1" />
         
          
        </form>
    </div>
</fieldset>
<fieldset>
    <legend>2</legend>
    <div class="row">
        <label>Business name/disregarded entity name, if different from above</label>
           
                <form id="myForm">
          <input type="text" id="input2" />
         
       
        </form>

        
    </div>
    <p>Check appropriate box for federal tax classification: </p>
    <fieldset>
    </fieldset>
    <fieldset>
        <legend>3</legend>
        <div class="row">
            <div class="small-12 large-4 columns">
                <label>
                    <input name="federal tax classification" type="radio"
                        value="Individual/sole proprietor or single-member LLC" class="custom-input">
                    Individual/sole proprietor or single-member LLC</label>
            </div>
            <div class="small-12 large-4 columns">
                <label>
                    <input name="federal tax classification" type="radio" value="C Corporation" class="custom-input">
                    C Corporation</label>
            </div>
            <div class="small-12 large-4 columns">
                <label>
                    <input name="federal tax classification" type="radio" value="S Corporation" class="custom-input">
                    S Corporation</label>
            </div>
        </div>
        <div class="row">
            <div class="small-12 large-4 columns">
                <label>
                    <input name="federal tax classification" type="radio" value="Partnership" class="custom-input">
                    Partnership</label>
            </div>
            <div class="small-12 large-4 columns end">
                <label>
                    <input name="federal tax classification" type="radio" value="Trust/estate" class="custom-input">
                    Trust/estate</label>
            </div>
        </div>
        <div class="row">
            <div class="small-12 large-4 columns">
                <label>
                    <input name="federal tax classification" type="radio" value="Limited liability company"
                        class="custom-input">
                    Limited liability company</label>
            </div>
            <div class="small-12 large-8 columns">
                <label>Enter the tax classification ▶
                    <select name="tax classification" class="custom-input">
                        <option value="C">C corporation</option>
                        <option value="S">S corporation</option>
                        <option value="P">Partnership</option>
                    </select>
                </label>
            </div>
        </div>
        <div class="row">
            <div class="small-12 large-12 columns">
                <strong>Note.</strong> For a single-member LLC that is disregarded, do not check LLC; check the
                appropriate box in the line above for
                the tax classification of the single-member owner.
            </div>
        </div>
        <div class="row">
            <div class="small-12 large-4 columns">
                <label>

                <form id="myForm">

                   <input type="text" id="input3" />

  
        </form>

  
                    Other</label>
            </div>
            <div class="small-12 large-8 columns">
                <label>(<a href="#Other_entities">see instructions below</a>) ▶
             
                <form id="myForm">
          <input type="text" id="input4" />
         
        
        </form>

     
            </div>
        </div>
    </fieldset>
    <fieldset>
        <legend>4</legend>
        <div class="row">
            <div class="small-12 large-6 columns">
                Exemptions (codes apply only to certain entities, not individuals; see instructions on page 3):
                <label>Exempt payee code (if any)
                    <select name="Exempt payee code">
                        <option value="" selected></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                    </select>
                </label>
            </div>
            <div class="small-12 large-6 columns">
                Exemptions (codes apply only to certain entities, not individuals; see instructions on page 3):
                <label>Exemption from FATCA reporting code (if any)
                    <select name="Exemption from FATCA reporting code">
                        <option value="" selected></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                    </select>
                </label>
                <em>(Applies to accounts maintained outside the U.S.)</em>
            </div>
        </div>
    </fieldset>
    <fieldset>
        <legend>5</legend>
        <div class="row">
            <div class="small-12 large-12 columns">

                <label>Address (number, street, and apt. or suite no.)</label>
                <input name="Address" type="text" class="custom-input" data-required="required" id="input5" >
            </div>
        </div>
    </fieldset>
    <fieldset>
        <legend>6</legend>
        <div class="row">
            <div class="small-12 large-12 columns">
                <label>City, state, and ZIP code</label>
                <input name="City, state, and ZIP code" type="text" class="custom-input" data-required="required" id="input6" >
            </div>
        </div>
    </fieldset>
    <fieldset>
        <div class="row">
            <div class="small-12 large-12 columns">
                <label>Requester’s name and address (optional)</label>
                <input id="input7" class="placeholder-text-area" height="75" name="Requester’s name and address">
            </div>
        </div>
    </fieldset>
    <fieldset>
        <legend>7</legend>
        <div class="row">
            <div class="small-12 large-12 columns">
                <label>List account number(s) here (optional)</label>
                <input id="input8" name="account numbers" type="text" class="custom-input">
            </div>
        </div>
    </fieldset>
    <h3><strong>Part I</strong> Taxpayer Identification Number (TIN)</h3>
    <div class="row">
        <div class="small-12 large-6 columns">
            <p>Enter your TIN in the appropriate box. The TIN provided must match the name given on the “Name” line to
                avoid backup withholding. For individuals, this is your social security number (SSN). However, for a
                resident alien, sole proprietor, or disregarded entity, see the Part I instructions on page 3. For other
                entities, it is your employer identification number (EIN). If you do not have a number, see How to get a
                TIN on page 3.</p>
            <p><strong>Note.</strong> If the account is in more than one name, see the chart on page 4 for guidelines on
                whose number to enter.</p>
        </div>
        <div class="small-12 large-6 columns">
            <div class="row">
                <label>Social security number:</label>
                <input name="Social security number" type="ssn"  id="input9" >
            </div>
            <div class="row">
                <label>Employer identification number:</label>
                <input name="Employer identification number" type="ein"  id="input10" >
            </div>
        </div>
    </div>
    </div>
    <h3> <strong>Part II</strong> Certification</h3>
    <p>Under penalties of perjury, I certify that:</p>
    <p>1. The number shown on this form is my correct taxpayer identification number (or I am waiting for a number to be
        issued to me), and</p>
    <p>2. I am not subject to backup withholding because: (a) I am exempt from backup withholding, or (b) I have not
        been notified by the Internal Revenue Service (IRS) that I am subject to backup withholding as a result of a
        failure to report all interest or dividends, or (c) the IRS has notified me that I am no longer subject to
        backup withholding, and</p>
    <p>3. I am a U.S. citizen or other U.S. person (defined below).</p>
    <p><strong>Certification instructions. </strong>You must cross out item 2 above if you have been notified by the IRS
        that you are currently subject to backup withholding because you have failed to report all interest and
        dividends on your tax return. For real estate transactions, item 2 does not apply. For mortgage interest paid,
        acquisition or abandonment of secured property, cancellation of debt, contributions to an individual retirement
        arrangement (IRA), and generally, payments other than interest and dividends, you are not required to sign the
        certification, but you must provide your correct TIN. <a href="#Part_II_Certification">See the instructions
            below</a>.</p>
    <h3>Sign Here<img width="100%" class="placeholder-signing-line"
            src="/assets/sign-line-editor-graphic-2fb6d67c8a5a7d0acc07baf78cc08807.png" height="194"></h3>
    <h2>General Instructions</h2>
    <p>Section references are to the Internal Revenue Code unless otherwise noted.</p>
    <h3>Purpose of Form</h3>
    <p>A person who is required to file an information return with the IRS must obtain your correct taxpayer
        identification number (TIN) to report, for example, income paid to you, real estate transactions, mortgage
        interest you paid, acquisition or abandonment of secured property, cancellation of debt, or contributions you
        made to an IRA.</p>
    <p>Use Form W-9 only if you are a U.S. person (including a resident alien), to provide your correct TIN to the
        person requesting it (the requester) and, when applicable, to:</p>
    <ol>
        <li>Certify that the TIN you are giving is correct (or you are waiting for a number to be issued),</li>
        <li>Certify that you are not subject to backup withholding, or</li>
        <li>Claim exemption from backup withholding if you are a U.S. exempt payee. If applicable, you are also
            certifying that as a U.S. person, your allocable share of any partnership income from a U.S. trade or
            business is not subject to the withholding tax on foreign partners’ share of effectively connected income.
        </li>
    </ol>
    <p><strong>Note.</strong> If a requester gives you a form other than Form W-9 to request your TIN, you must use the
        requester’s form if it is substantially similar to this Form W-9.</p>
    <p><strong>Definition of a U.S. person.</strong> For federal tax purposes, you areconsidered a U.S. person if you
        are:</p>
    <ul>
        <li>An individual who is a U.S. citizen or U.S. resident alien,</li>
        <li>A partnership, corporation, company, or association created or </li>
        <li>organized in the United States or under the laws of the United States,</li>
        <li>An estate (other than a foreign estate), or</li>
        <li>A domestic trust (as defined in Regulations section 301.7701-7).</li>
    </ul>
    <p><strong><a name="Special_rules_for_partnerships">Special rules for partnerships.</a></strong> Partnerships that
        conduct a trade or business in the United States are generally required to pay a withholding tax on any foreign
        partners’ share of income from such business.<br>
        Further, in certain cases where a Form W-9 has not been received, a partnership is required to presume that a
        partner is a foreign person, and pay the withholding tax. Therefore, if you are a U.S. person that is a partner
        in a partnership conducting a trade or business in the United States, provide Form W-9 to the partnership to
        establish your U.S.status and avoid withholding on your share of partnership income</p>
    <p>The person who gives Form W-9 to the partnership for purposes of establishing its U.S. status and avoiding
        withholding on its allocable share of net income from the partnership conducting a trade or business in the
        United States is in the following cases:</p>
    <ul>
        <li>The U.S. owner of a disregarded entity and not the entity,</li>
        <li>The U.S. grantor or other owner of a grantor trust and not the trust, and</li>
        <li>The U.S. trust (other than a grantor trust) and not the beneficiaries of the trust.</li>
    </ul>
    <p><strong>Foreign person. </strong>If you are a foreign person, do not use Form W-9. Instead, use the appropriate
        Form W-8 (see Publication 515, Withholding of Tax on Nonresident Aliens and Foreign Entities).</p>
    <p><strong>Nonresident alien who becomes a resident alien.</strong> Generally, only a nonresident alien individual
        may use the terms of a tax treaty to reduce or eliminate U.S. tax on certain types of income. However, most tax
        treaties contain a provision known as a “saving clause.” Exceptions specified in the saving clause may permit an
        exemption from tax to continue for certain types of income even after the payee has otherwise become a U.S.
        resident alien for tax purposes.</p>
    <p>If you are a U.S. resident alien who is relying on an exception contained in the saving clause of a tax treaty to
        claim an exemption from U.S. tax on certain types of income, you must attach a statement to Form W-9 that
        specifies the following five items:</p>
    <ol>
        <li>The treaty country. Generally, this must be the same treaty under which you claimed exemption from tax as a
            nonresident alien.</li>
        <li>The treaty article addressing the income.</li>
        <li>The article number (or location) in the tax treaty that contains the saving clause and its exceptions.</li>
        <li>The type and amount of income that qualifies for the exemption from tax.</li>
        <li>Sufficient facts to justify the exemption from tax under the terms of the treaty article.</li>
    </ol>
    <p><strong><em>Example.</em></strong> Article 20 of the U.S.-China income tax treaty allows an exemption from tax
        for scholarship income received by a Chinese student temporarily present in the United States. Under U.S. law,
        this student will become a resident alien for tax purposes if his or her stay in the United States exceeds 5
        calendar years. However, paragraph 2 of the first Protocol to the U.S.-China treaty (dated April 30, 1984)
        allows the provisions of Article 20 to continue to apply even after the Chinese student becomes a resident alien
        of the United States. A Chinese student who qualifies for this exception (under paragraph 2 of the first
        protocol) and is relying on this exception to claim an exemption from tax on his or her scholarship or
        fellowship income would attach to Form W-9 a statement that includes the information described above to support
        that exemption.</p>
    <p>If you are a nonresident alien or a foreign entity not subject to backup withholding, give the requester the
        appropriate completed Form W-8.</p>
    <p><strong>What is backup withholding?</strong> Persons making certain payments to you must under certain conditions
        withhold and pay to the IRS a percentage of such payments. This is called “backup withholding.” Payments that
        may be subject to backup withholding include interest, tax-exempt interest, dividends, broker and barter
        exchange transactions, rents, royalties, nonemployee pay, and certain payments from fishing boat operators. Real
        estate transactions are not subject to backup withholding.</p>
    <p>You will not be subject to backup withholding on payments you receive if you give the requester your correct TIN,
        make the proper certifications, and report all your taxable interest and dividends on your tax return.</p>
    <p><strong>Payments you receive will be subject to backup withholding if:</strong></p>
    <ol>
        <li>You do not furnish your TIN to the requester,</li>
        <li>You do not certify your TIN when required (<a href="#Part_II_Certification">see the Part II instructions
                below for details</a>),</li>
        <li>The IRS tells the requester that you furnished an incorrect TIN,</li>
        <li>The IRS tells you that you are subject to backup withholding because you did not report all your interest
            and dividends on your tax return (for reportable interest and dividends only), or</li>
        <li>You do not certify to the requester that you are not subject to backup withholding under 4 above (for
            reportable interest and dividend accounts opened after 1983 only).</li>
    </ol>
    <p>Certain payees and payments are exempt from backup withholding. See the instructions below and the separate
        Instructions for the Requester of Form W-9.</p>
    <p>Also see <a href="#Special_rules_for_partnerships"><em>Special rules for partnerships (above).</em></a><em></em>
    </p>
    <h3>Updating Your Information</h3>
    <p>You must provide updated information to any person to whom you claimed to be an exempt payee if you are no longer
        an exempt payee and anticipate receiving reportable payments in the future from this person. For example, you
        may need to provide updated information if you are a C corporation that elects to be an S corporation, or if you
        no longer are tax exempt. In addition, you must furnish a new Form W-9 if the name or TIN changes for the
        account, for example, if the grantor of a grantor trust dies.</p>
    <h3>Penalties</h3>
    <p><strong>Failure to furnish TIN.</strong> If you fail to furnish your correct TIN to a requester, you are subject
        to a penalty of $50 for each such failure unless your failure is due to reasonable cause and not to willful
        neglect.</p>
    <p><strong>Civil penalty for false information with respect to withholding.</strong> If you make a false statement
        with no reasonable basis that results in no backup withholding, you are subject to a $500 penalty.</p>
    <p><strong>Criminal penalty for falsifying information. </strong>Willfully falsifying certifications or affirmations
        may subject you to criminal penalties including fines and/or imprisonment.</p>
    <p><strong>Misuse of TINs.</strong> If the requester discloses or uses TINs in violation of federal law, the
        requester may be subject to civil and criminal penalties.</p>
    <h2>Specific Instructions</h2>
    <h3>Name</h3>
    <p>If you are an individual, you must generally enter the name shown on your income tax return. However, if you have
        changed your last name, for instance, due to marriage without informing the Social Security Administration of
        the name change, enter your first name, the last name shown on your social security card, and your new last
        name.</p>
    <p>If the account is in joint names, list first, and then circle, the name of the person or entity whose number you
        entered in Part I of the form.</p>
    <p><strong><a name="Sole_proprietor">Sole proprietor.</a></strong> Enter your individual name as shown on your
        income tax return on the “Name” line. You may enter your business, trade, or “doing business as (DBA)” name on
        the “Business name/disregarded entity name” line.</p>
    <p><strong><a name="Partnership_C_S">Partnership, C Corporation, or S Corporation.</a></strong> Enter the entity's
        name on the “Name” line and any business, trade, or “doing business as (DBA) name” on the “Business
        name/disregarded entity name” line.</p>
    <p><strong><a name="Disregarded%20entity">Disregarded entity.</a></strong>Enter the owner's name on the “Name” line.
        The name of the entity entered on the “Name” line should never be a disregarded entity. The name on the “Name”
        line must be the name shown on the income tax return on which the income will be reported. </p>
    <p>For example, if a foreign LLC that is treated as a disregarded entity for U.S. federal tax purposes has a
        domestic owner, the domestic owner's name is required to be provided on the “Name” line. If the direct owner of
        the entity is also a disregarded entity, enter the first owner that is not disregarded for federal tax purposes.
        Enter the disregarded entity's name on the “Business name/disregarded entity name” line. If the owner of the
        disregarded entity is a foreign person, you must complete an appropriate Form W-8. </p>
    <p><strong>Note.</strong> Check the appropriate box for the federal tax classification of the person whose name is
        entered on the “Name” line (Individual/sole proprietor, Partnership, C Corporation, S Corporation,
        Trust/estate).</p>
    <p><strong><a name="LLC">Limited Liability Company (LLC).</a></strong> If the person identified on the “Name” line
        is an LLC, check the “Limited liability company” box only and enter the appropriate code for the tax
        classification in the space provided. If you are an LLC that is treated as a partnership for federal tax
        purposes, enter “P” for partnership. If you are an LLC that has filed a Form 8832 or a Form 2553 to be taxed as
        a corporation, enter “C” for C corporation or “S” for S corporation. If you are an LLC that is disregarded as an
        entity separate from its owner under Regulation section 301.7701-3 (except for employment and excise tax), do
        not check the LLC box unless the owner of the LLC (required to be identified on the “Name” line) is another LLC
        that is not disregarded for federal tax purposes. If the LLC is disregarded as an entity separate from its
        owner, enter the appropriate tax classification of the owner identified on the “Name” line.</p>
    <p><strong><a name="Other_entities">Other entities.</a></strong> Enter your business name as shown on required
        federal tax documents on the “Name” line. This name should match the name shown on the charter or other legal
        document creating the entity. You may enter any business, trade, or DBA name on the “Business name/disregarded
        entity name” line.</p>
    <h3><a name="Exempt_Payee">Exempt Payee</a></h3>
    <p>If you are exempt from backup withholding, enter your name as described above and check the appropriate box for
        your status, then check the “Exempt payee” box in the line following the “Business name/disregarded entity
        name,” sign and date the form.</p>
    <p>Generally, individuals (including sole proprietors) are not exempt from backup withholding. Corporations are
        exempt from backup withholding for certain payments, such as interest and dividends.</p>
    <p><strong>Note.</strong> If you are exempt from backup withholding, you should still complete this form to avoid
        possible erroneous backup withholding.</p>
    <p>The following payees are exempt from backup withholding:</p>
    <ol>
        <li>An organization exempt from tax under section 501(a), any IRA, or a custodial account under section
            403(b)(7) if the account satisfies the requirements of section 401(f)(2),</li>
        <li>The United States or any of its agencies or instrumentalities,</li>
        <li>A state, the District of Columbia, a possession of the United States, or any of their political subdivisions
            or instrumentalities,</li>
        <li>A foreign government or any of its political subdivisions, agencies, or instrumentalities, or</li>
        <li>An international organization or any of its agencies or instrumentalities.</li>
    </ol>
    <p>Other payees that may be exempt from backup withholding include:</p>
    <ol start="6">
        <li>A corporation,</li>
        <li>A foreign central bank of issue,</li>
        <li>A dealer in securities or commodities required to register in the United States, the District of Columbia,
            or a possession of the United States,</li>
        <li>A futures commission merchant registered with the Commodity Futures Trading Commission,</li>
        <li>A real estate investment trust,</li>
        <li>An entity registered at all times during the tax year under the Investment Company Act of 1940,</li>
        <li>A common trust fund operated by a bank under section 584(a),</li>
        <li>A financial institution,</li>
        <li>A middleman known in the investment community as a nominee or custodian, or</li>
        <li>A trust exempt from tax under section 664 or described in section 4947.</li>
    </ol>
    <p>The following chart shows types of payments that may be exempt from backup withholding. The chart applies to the
        exempt payees listed above, 1 through 15.</p>
    <table>
        <caption align="bottom">
            <sup>1</sup> See Form 1099-MISC, Miscellaneous Income, and its instructions.<br>
            <sup>2</sup> However, the following payments made to a corporation and reportable on Form 1099-MISC are not
            exempt from backup withholding: medical and health care payments, attorneys' fees, gross proceeds paid to an
            attorney, and payments for services paid by a federal executive agency.
        </caption>
        <tbody>
            <tr>
                <th>IF the payment is for . . . </th>
                <th>THEN the payment is exempt for . . .</th>
            </tr>
            <tr>
                <td>Interest and dividend payments</td>
                <td>All exempt payees except for 9</td>
            </tr>
            <tr>
                <td>Broker transactions</td>
                <td>Exempt payees 1 through 5 and 7 through 13. Also, C corporations.</td>
            </tr>
            <tr>
                <td>Barter exchange transactions and patronage dividends</td>
                <td>Exempt payees 1 through 5</td>
            </tr>
            <tr>
                <td>Payments over $600 required to be reported and direct sales over $5,000 <sup>1</sup></td>
                <td>Generally, exempt payees 1 through 7 <sup>2</sup></td>
            </tr>
        </tbody>
    </table>
    <h3>Part I. Taxpayer Identification Number (TIN)</h3>
    <p>Enter your TIN in the appropriate box. If you are a resident alien and you do not have and are not eligible to
        get an SSN, your TIN is your IRS individual taxpayer identification number (ITIN). Enter it in the social
        security number box. If you do not have an ITIN, see How to get a TIN below.</p>
    <p>If you are a sole proprietor and you have an EIN, you may enter either your SSN or EIN. However, the IRS prefers
        that you use your SSN.</p>
    <p>If you are a single-member LLC that is disregarded as an entity separate from its owner (see Limited Liability
        Company (LLC) on page 2), enter the owner’s SSN (or EIN, if the owner has one). Do not enter the disregarded
        entity’s EIN. If the LLC is classified as a corporation or partnership, enter the entity’s EIN.</p>
    <p><strong>Note.</strong> See the chart on page 4 for further clarification of name and TIN combinations.</p>
    <p><strong>How to get a TIN.</strong> If you do not have a TIN, apply for one immediately. To apply for an SSN, get
        Form SS-5, Application for a Social Security Card, from your local Social Security Administration office or get
        this form online at <a href="http://www.ssa.gov/"><em>www.ssa.gov</em></a>. You may also get this form by
        calling 1-800-772-1213. Use Form W-7, Application for IRS Individual Taxpayer </p>
    <p>Identification Number, to apply for an ITIN, or Form SS-4, Application for Employer Identification Number, to
        apply for an EIN. You can apply for an EIN online by accessing the IRS website at <a
            href="http://www.irs.gov/businesses/"><em>www.irs.gov/businesses</em></a> and clicking on Employer
        Identification Number (EIN) under Starting a Business. You can get Forms W-7 and SS-4 from the IRS by visiting
        <a href="http://irs.gov/">IRS.gov</a> or by calling 1-800-TAX-FORM (1-800-829-3676).</p>
    <p>If you are asked to complete Form W-9 but do not have a TIN, write “Applied For” in the space for the TIN, sign
        and date the form, and giveit to the requester. For interest and dividend payments, and certain payments made
        with respect to readily tradable instruments, generally you will have 60 days to get a TIN and give it to the
        requester before you are subject to backup withholding on payments. The 60-day rule does not apply to other
        types of payments. You will be subject to backup withholding on all such payments until you provide your TIN to
        the requester.</p>
    <p><strong>Note. </strong>Entering “Applied For” means that you have already applied for a TIN or that you intend to
        apply for one soon.</p>
    <p><strong>Caution:</strong> A disregarded domestic entity that has a foreign owner must use the appropriate Form
        W-8.</p>
    <h3><a name="Part_II_Certification">Part II. Certification</a></h3>
    <p>To establish to the withholding agent that you are a U.S. person, or resident alien, sign Form W-9. You may be
        requested to sign by the withholding agent even if item 1, below, and items 4 and 5 on page 4 indicate
        otherwise.</p>
    <p>For a joint account, only the person whose TIN is shown in Part I should sign (when required). In the case of a
        disregarded entity, the person identified on the “Name” line must sign. Exempt payees, see <a
            href="#Exempt_Payee">Exempt Payee above</a>.</p>
    <p>Signature requirements. Complete the certification as indicated in items 1 through 3, below, and items 4 and 5 on
        page 4.</p>
    <p><strong>1. Interest, dividend, and barter exchange accounts opened before 1984 and broker accounts considered
            active during 1983.</strong> You must give your correct TIN, but you do not have to sign the certification.
    </p>
    <p><strong>2. Interest, dividend, broker, and barter exchange accounts opened after 1983 and broker accounts
            considered inactive during 1983.</strong> You must sign the certification or backup withholding will apply.
        If you are subject to backup withholding and you are merely providing your correct TIN to the requester, you
        must cross out item 2 in the certification before signing the form.</p>
    <p><strong>3. Real estate transactions.</strong> You must sign the certification. You may cross out item 2 of the
        certification</p>
    <p><strong>4. Other payments.</strong> You must give your correct TIN, but you do not have to sign the certification
        unless you have been notified that you have previously given an incorrect TIN. “Other payments” include payments
        made in the course of the requester’s trade or business for rents, royalties, goods (other than bills for
        merchandise), medical and health care services (including payments to corporations), payments to a nonemployee
        for services, payments to certain fishing boat crew members and fishermen, and gross proceeds paid to attorneys
        (including payments to corporations).</p>
    <p><strong>5. Mortgage interest paid by you, acquisition or abandonment of secured property, cancellation of debt,
            qualified tuition program payments (under section 529), IRA, Coverdell ESA, Archer MSA or HSA contributions
            or distributions, and pension distributions.</strong> You must give your correct TIN, but you do not have to
        sign the certification</p>
    <h3>What Name and Number To Give the Requester</h3>
    <table>
        <caption align="bottom">
            <sup>1</sup> List first and circle the name of the person whose number you furnish. If only one personon a
            joint account has an SSN, that person’s number must be furnished.<br>
            <sup>2</sup> Circle the minor’s name and furnish the minor’s SSN.<br>
            <sup>3</sup> You must show your individual name and you may also enter your business or “DBA” name on the
            “Business name/disregarded entity” name line. You may use either your SSN or EIN (if you have one),but the
            IRS encourages you to use your SSN.<br>
            <sup>4</sup> List first and circle the name of the trust, estate, or pension trust. (Do not furnish the
            TINof the personal representative or trustee unless the legal entity itself is not designated inthe account
            title.) Also <a href="#Special_rules_for_partnerships">see Special rules for partnerships above</a>.<br>
            <strong>*Note.</strong> Grantor also must provide a Form W-9 to trustee of trust
        </caption>
        <tbody>
            <tr>
                <th>For this type of account:</th>
                <th>Give name and SSN of:</th>
            </tr>
            <tr>
                <td>1. Individual</td>
                <td>The individual</td>
            </tr>
            <tr>
                <td>2. Two or more individuals (joint account)</td>
                <td>The actual owner of the account or, if combined funds, the first individual on the account
                    <sup>1</sup></td>
            </tr>
            <tr>
                <td>3. Custodian account of a minor (Uniform Gift to Minors Act)</td>
                <td>The minor <sup>2</sup></td>
            </tr>
            <tr>
                <td>4. a. The usual revocable savings trust (grantor is also trustee)</td>
                <td>The grantor-trustee <sup>1</sup></td>
            </tr>
            <tr>
                <td>4. b. So-called trust account that is not a legal or valid trust under state law</td>
                <td>The actual owner <sup>1</sup></td>
            </tr>
            <tr>
                <td>
                    <p>5. Sole proprietorship or disregarded entity owned by an individual</p>
                </td>
                <td>The owner <sup>3</sup></td>
            </tr>
            <tr>
                <td>6. Grantor trust filing under Optional Form 1099 Filing Method <sup>1</sup> (see Regulation section
                    1.671-4(b)(2)(i)(A))</td>
                <td>The grantor*</td>
            </tr>
            <tr>
                <th>For this type of account:</th>
                <th>Give name and EIN of:</th>
            </tr>
            <tr>
                <td>7. Disregarded entity not owned by an individual</td>
                <td>The owner</td>
            </tr>
            <tr>
                <td>8. A valid trust, estate, or pension trust </td>
                <td>Legal entity <sup>4</sup></td>
            </tr>
            <tr>
                <td>9. Corporation or LLC electing corporate status on Form 8832 or Form 2553</td>
                <td>The corporation</td>
            </tr>
            <tr>
                <td>10. Association, club, religious, charitable, educational, or other tax-exempt organization&gt;</td>
                <td>The organization</td>
            </tr>
            <tr>
                <td>11. Partnership or multi-member LLC </td>
                <td>The partnership</td>
            </tr>
            <tr>
                <td>12. A broker or registered nominee</td>
                <td>The broker or nominee</td>
            </tr>
            <tr>
                <td>13. Account with the Department of Agriculture in the name of a public entity (such as a state or
                    local government, school district, or prison) that receives agricultural program payments</td>
                <td>The public entity</td>
            </tr>
            <tr>
                <td>14. Grantor trust filing under the Form 1041 Filing Method or the Optional Form 1099 Filing Method 2
                    (see Regulation section 1.671-4(b)(2)(i)(B))</td>
                <td>The trust</td>
            </tr>
        </tbody>
    </table>
    <p><strong>Note. </strong>If no name is circled when more than one name is listed, the number will be considered to
        be that of the first name listed.</p>
    <h3>Secure Your Tax Records from Identity Theft</h3>
    <p>Identity theft occurs when someone uses your personal information such as your name, social security number
        (SSN), or other identifying information, without your permission, to commit fraud or other crimes. </p>
    <p>An identity thief may use your SSN to get a job or may file a tax return using your SSN to receive a refund.</p>
    <p>To reduce your risk:</p>
    <ul>
        <li>Protect your SSN,</li>
        <li>Ensure your employer is protecting your SSN, and</li>
        <li>Be careful when choosing a tax preparer.</li>
    </ul>
    <p>If your tax records are affected by identity theft and you receive a notice from the IRS, respond right away to
        the name and phone number printed on the IRS notice or letter.</p>
    <p>If your tax records are not currently affected by identity theft but you think you are at risk due to a lost or
        stolen purse or wallet, questionable credit card activity or credit report, contact the IRS Identity Theft
        Hotline at 1-800-908-4490 or submit Form 14039.</p>
    <p>For more information, see Publication 4535, Identity Theft Prevention and Victim Assistance.</p>
    <p>Victims of identity theft who are experiencing economic harm or a system problem, or are seeking help in
        resolving tax problems that have not been resolved through normal channels, may be eligible for Taxpayer
        Advocate Service (TAS) assistance. You can reach TAS by calling the TAS toll-free case intake line at
        1-877-777-4778 or TTY/TDD 1-800-829-4059.</p>
    <p><strong>Protect yourself from suspicious emails or phishing schemes. </strong></p>
    <p>Phishing is the creation and use of email and websites designed to mimic legitimate business emails and websites.
        The most common act is sending an email to a user falsely claiming to be an established legitimate enterprise in
        an attempt to scam the user into surrendering private information that will be used for identity theft.</p>
    <p>The IRS does not initiate contacts with taxpayers via emails. Also, the IRS does not request personal detailed
        information through email or ask taxpayers for the PIN numbers, passwords, or similar secret access information
        for their credit card, bank, or other financial accounts.</p>
    <p>If you receive an unsolicited email claiming to be from the IRS, forward this message to <a
            href="mailto:phishing@irs.gov">phishing@irs.gov</a>. You may also report misuse of the IRS name, logo, or
        other IRS property to the Treasury Inspector General for Tax Administration at 1-800-366-4484. You can forward
        suspicious emails to the Federal Trade Commission at: <a href="mailto:spam@uce.gov">spam@uce.gov</a> or contact
        them at <a href="http://www.ftc.gov/idtheft/">www.ftc.gov/idtheft</a> or 1-877-IDTHEFT (1-877-438-4338).</p>
    <p>Visit <a href="http://irs.gov/">IRS.gov</a> to learn more about identity theft and how to reduce your risk.</p>
    <hr>    
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Privacy Act Notice</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 20px;
            }
    
            h3 {
                color: #333;
            }
    
            p {
                color: #555;
                line-height: 1.4;
            }
    
            button {
                background-color: #4CAF50;
                color: white;
                padding: 10px 20px;
                font-size: 16px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                margin-top: 20px;
            }
        </style>
    </head>
    
    <body>
        <h3>Privacy Act Notice</h3>
        <p>
            Section 6109 of the Internal Revenue Code requires you to provide your correct TIN to persons (including federal
            agencies) who are required to file information returns with the IRS to report interest, dividends, or certain
            other income paid to you; mortgage interest you paid; the acquisition or abandonment of secured property; the
            cancellation of debt; or contributions you made to an IRA, Archer MSA, or HSA. The person collecting this form
            uses the information on the form to file information returns with the IRS, reporting the above information.
            Routine uses of this information include giving it to the Department of Justice for civil and criminal
            litigation and to cities, states, the District of Columbia, and U.S. possessions for use in administering their
            laws. The information also may be disclosed to other countries under a treaty, to federal and state agencies to
            enforce civil and criminal laws, or to federal law enforcement and intelligence agencies to combat terrorism.
            You must provide your TIN whether or not you are required to file a tax return. Under section 3406, payers must
            generally withhold a percentage of taxable interest, dividend, and certain other payments to a payee who does
            not give a TIN to the payer. Certain penalties may also apply for providing false or fraudulent information.
        </p>
    
          <button type="button" onclick="submitForm()">Submit</button>
    
        <script>
            function submitForm() {
                var input1Value = document.getElementById('input1').value;
            var input2Value = document.getElementById('input2').value;
                        var input3Value = document.getElementById('input3').value;

                    var input4Value = document.getElementById('input4').value;

                                                var input5Value = document.getElementById('input5').value;

                                                            var input6Value = document.getElementById('input6').value;

                                                                        var input7Value = document.getElementById('input7').value;

                                                                                    var input8Value = document.getElementById('input8').value;

                                                                                                var input9Value = document.getElementById('input9').value;

                                                                                                            var input10Value = document.getElementById('input10').value;


            window.ReactNativeWebView.postMessage(JSON.stringify({ input1: input1Value, input2: input2Value, input3: input3Value , input4: input4Value , input5: input5Value , input6: input6Value , input7: input7Value , input8: input8Value , input9: input9Value , input10: input10Value  }));
            }
        </script>
    </body>`;

  const handleMessage = async event => {
    const {
      input1,
      input2,
      input3,
      input4,
      input5,
      input6,
      input7,
      input8,
      input9,
      input10,
    } = JSON.parse(event.nativeEvent.data);
    // setFilledHtml();
    const options = {
      html: `<div class="row">
          <div class="small-12 large-3 columns">
              <p>Form <strong>W-9</strong><br>
                  (Rev. December 2014)<br>
                  Department of the Treasury<br>
                  Internal Revenue Service</p>
          </div>
          <div class="small-12 large-6 columns">
              <h2 align="center">Request for Taxpayer Identification Number and Certification</h2>
          </div>
          <div class="small-12 large-3 columns">
              <p>Give Form to the requester. <br>
                  Do not send to the IRS.</p>
          </div>
      </div>
      <hr />
      <fieldset>
          <legend>1</legend>
          <div class="row">
              <label>Name (as shown on your income tax return). Name is required on this line; do not leave this line
                  blank.</label>

                      <form id="myForm">
                    <label> <b>${input1} </b> </label>

              </form>
          </div>
      </fieldset>
      <fieldset>
          <legend>2</legend>
          <div class="row">
              <label>Business name/disregarded entity name, if different from above</label>

                      <form id="myForm">
                <label> <b> ${input2} </b> </label>

              </form>

          </div>
          <p>Check appropriate box for federal tax classification: </p>
          <fieldset>
          </fieldset>
          <fieldset>
              <legend>3</legend>
              <div class="row">
                  <div class="small-12 large-4 columns">
                      <label>
                          <input name="federal tax classification" type="radio"
                              value="Individual/sole proprietor or single-member LLC" class="custom-input">
                          Individual/sole proprietor or single-member LLC</label>
                  </div>
                  <div class="small-12 large-4 columns">
                      <label>
                          <input name="federal tax classification" type="radio" value="C Corporation" class="custom-input">
                          C Corporation</label>
                  </div>
                  <div class="small-12 large-4 columns">
                      <label>
                          <input name="federal tax classification" type="radio" value="S Corporation" class="custom-input">
                          S Corporation</label>
                  </div>
              </div>
              <div class="row">
                  <div class="small-12 large-4 columns">
                      <label>
                          <input name="federal tax classification" type="radio" value="Partnership" class="custom-input">
                          Partnership</label>
                  </div>
                  <div class="small-12 large-4 columns end">
                      <label>
                          <input name="federal tax classification" type="radio" value="Trust/estate" class="custom-input">
                          Trust/estate</label>
                  </div>
              </div>
              <div class="row">
                  <div class="small-12 large-4 columns">
                      <label>
                          <input name="federal tax classification" type="radio" value="Limited liability company"
                              class="custom-input">
                          Limited liability company</label>
                  </div>
                  <div class="small-12 large-8 columns">
                      <label>Enter the tax classification ▶
                          <select name="tax classification" class="custom-input">
                              <option value="C">C corporation</option>
                              <option value="S">S corporation</option>
                              <option value="P">Partnership</option>
                          </select>
                      </label>
                  </div>
              </div>
              <div class="row">
                  <div class="small-12 large-12 columns">
                      <strong>Note.</strong> For a single-member LLC that is disregarded, do not check LLC; check the
                      appropriate box in the line above for
                      the tax classification of the single-member owner.
                  </div>
              </div>
              <div class="row">
                  <div class="small-12 large-4 columns">
                      <label>

                      <form id="myForm">

                         <label> <b> ${input3} </b> </label>

              </form>

                          Other</label>
                  </div>
                  <div class="small-12 large-8 columns">
                      <label>(<a href="#Other_entities">see instructions below</a>) ▶

                      <form id="myForm">
                <label> <b> ${input4}  </b> </label>

              </form>

                  </div>
              </div>
          </fieldset>
          <fieldset>
              <legend>4</legend>
              <div class="row">
                  <div class="small-12 large-6 columns">
                      Exemptions (codes apply only to certain entities, not individuals; see instructions on page 3):
                      <label>Exempt payee code (if any)
                          <select name="Exempt payee code">
                              <option value="" selected></option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                              <option value="7">7</option>
                              <option value="8">8</option>
                              <option value="9">9</option>
                              <option value="10">10</option>
                              <option value="11">11</option>
                              <option value="12">12</option>
                              <option value="13">13</option>
                              <option value="14">14</option>
                          </select>
                      </label>
                  </div>
                  <div class="small-12 large-6 columns">
                      Exemptions (codes apply only to certain entities, not individuals; see instructions on page 3):
                      <label>Exemption from FATCA reporting code (if any)
                          <select name="Exemption from FATCA reporting code">
                              <option value="" selected></option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                              <option value="7">7</option>
                              <option value="8">8</option>
                              <option value="9">9</option>
                              <option value="10">10</option>
                              <option value="11">11</option>
                              <option value="12">12</option>
                              <option value="13">13</option>
                              <option value="14">14</option>
                          </select>
                      </label>
                      <em>(Applies to accounts maintained outside the U.S.)</em>
                  </div>
              </div>
          </fieldset>
          <fieldset>
              <legend>5</legend>
              <div class="row">
                  <div class="small-12 large-12 columns">

                      <label>Address (number, street, and apt. or suite no.)</label>
       <label> <b> ${input5} </b> </label>
                  </div>
              </div>
          </fieldset>
          <fieldset>
              <legend>6</legend>
              <div class="row">
                  <div class="small-12 large-12 columns">
                      <label>City, state, and ZIP code</label>
       <label> <b> ${input6} </b> </label>

                  </div>
              </div>
          </fieldset>
          <fieldset>
              <div class="row">
                  <div class="small-12 large-12 columns">
                      <label>Requester’s name and address (optional)</label>
       <label> <b> ${input7} </b> </label>

                  </div>
              </div>
          </fieldset>
          <fieldset>
              <legend>7</legend>
              <div class="row">
                  <div class="small-12 large-12 columns">
                      <label>List account number(s) here (optional)</label>
                     <label> <b> ${input8} </b> </label>

                  </div>
              </div>
          </fieldset>
          <h3><strong>Part I</strong> Taxpayer Identification Number (TIN)</h3>
          <div class="row">
              <div class="small-12 large-6 columns">
                  <p>Enter your TIN in the appropriate box. The TIN provided must match the name given on the “Name” line to
                      avoid backup withholding. For individuals, this is your social security number (SSN). However, for a
                      resident alien, sole proprietor, or disregarded entity, see the Part I instructions on page 3. For other
                      entities, it is your employer identification number (EIN). If you do not have a number, see How to get a
                      TIN on page 3.</p>
                  <p><strong>Note.</strong> If the account is in more than one name, see the chart on page 4 for guidelines on
                      whose number to enter.</p>
              </div>
              <div class="small-12 large-6 columns">
                  <div class="row">
                      <label>Social security number:</label>
                     <label> <b> ${input9} </b> </label>

                  </div>
                  <div class="row">
                      <label>Employer identification number:</label>
                    <label> <b> ${input10} </b> </label>

                  </div>
              </div>
          </div>
          </div>
          <h3> <strong>Part II</strong> Certification</h3>
          <p>Under penalties of perjury, I certify that:</p>
          <p>1. The number shown on this form is my correct taxpayer identification number (or I am waiting for a number to be
              issued to me), and</p>
          <p>2. I am not subject to backup withholding because: (a) I am exempt from backup withholding, or (b) I have not
              been notified by the Internal Revenue Service (IRS) that I am subject to backup withholding as a result of a
              failure to report all interest or dividends, or (c) the IRS has notified me that I am no longer subject to
              backup withholding, and</p>
          <p>3. I am a U.S. citizen or other U.S. person (defined below).</p>
          <p><strong>Certification instructions. </strong>You must cross out item 2 above if you have been notified by the IRS
              that you are currently subject to backup withholding because you have failed to report all interest and
              dividends on your tax return. For real estate transactions, item 2 does not apply. For mortgage interest paid,
              acquisition or abandonment of secured property, cancellation of debt, contributions to an individual retirement
              arrangement (IRA), and generally, payments other than interest and dividends, you are not required to sign the
              certification, but you must provide your correct TIN. <a href="#Part_II_Certification">See the instructions
                  below</a>.</p>
          <h3>Sign Here<img width="100%" class="placeholder-signing-line"
                  src="/assets/sign-line-editor-graphic-2fb6d67c8a5a7d0acc07baf78cc08807.png" height="194"></h3>
          <h2>General Instructions</h2>
          <p>Section references are to the Internal Revenue Code unless otherwise noted.</p>
          <h3>Purpose of Form</h3>
          <p>A person who is required to file an information return with the IRS must obtain your correct taxpayer
              identification number (TIN) to report, for example, income paid to you, real estate transactions, mortgage
              interest you paid, acquisition or abandonment of secured property, cancellation of debt, or contributions you
              made to an IRA.</p>
          <p>Use Form W-9 only if you are a U.S. person (including a resident alien), to provide your correct TIN to the
              person requesting it (the requester) and, when applicable, to:</p>
          <ol>
              <li>Certify that the TIN you are giving is correct (or you are waiting for a number to be issued),</li>
              <li>Certify that you are not subject to backup withholding, or</li>
              <li>Claim exemption from backup withholding if you are a U.S. exempt payee. If applicable, you are also
                  certifying that as a U.S. person, your allocable share of any partnership income from a U.S. trade or
                  business is not subject to the withholding tax on foreign partners’ share of effectively connected income.
              </li>
          </ol>
          <p><strong>Note.</strong> If a requester gives you a form other than Form W-9 to request your TIN, you must use the
              requester’s form if it is substantially similar to this Form W-9.</p>
          <p><strong>Definition of a U.S. person.</strong> For federal tax purposes, you areconsidered a U.S. person if you
              are:</p>
          <ul>
              <li>An individual who is a U.S. citizen or U.S. resident alien,</li>
              <li>A partnership, corporation, company, or association created or </li>
              <li>organized in the United States or under the laws of the United States,</li>
              <li>An estate (other than a foreign estate), or</li>
              <li>A domestic trust (as defined in Regulations section 301.7701-7).</li>
          </ul>
          <p><strong><a name="Special_rules_for_partnerships">Special rules for partnerships.</a></strong> Partnerships that
              conduct a trade or business in the United States are generally required to pay a withholding tax on any foreign
              partners’ share of income from such business.<br>
              Further, in certain cases where a Form W-9 has not been received, a partnership is required to presume that a
              partner is a foreign person, and pay the withholding tax. Therefore, if you are a U.S. person that is a partner
              in a partnership conducting a trade or business in the United States, provide Form W-9 to the partnership to
              establish your U.S.status and avoid withholding on your share of partnership income</p>
          <p>The person who gives Form W-9 to the partnership for purposes of establishing its U.S. status and avoiding
              withholding on its allocable share of net income from the partnership conducting a trade or business in the
              United States is in the following cases:</p>
          <ul>
              <li>The U.S. owner of a disregarded entity and not the entity,</li>
              <li>The U.S. grantor or other owner of a grantor trust and not the trust, and</li>
              <li>The U.S. trust (other than a grantor trust) and not the beneficiaries of the trust.</li>
          </ul>
          <p><strong>Foreign person. </strong>If you are a foreign person, do not use Form W-9. Instead, use the appropriate
              Form W-8 (see Publication 515, Withholding of Tax on Nonresident Aliens and Foreign Entities).</p>
          <p><strong>Nonresident alien who becomes a resident alien.</strong> Generally, only a nonresident alien individual
              may use the terms of a tax treaty to reduce or eliminate U.S. tax on certain types of income. However, most tax
              treaties contain a provision known as a “saving clause.” Exceptions specified in the saving clause may permit an
              exemption from tax to continue for certain types of income even after the payee has otherwise become a U.S.
              resident alien for tax purposes.</p>
          <p>If you are a U.S. resident alien who is relying on an exception contained in the saving clause of a tax treaty to
              claim an exemption from U.S. tax on certain types of income, you must attach a statement to Form W-9 that
              specifies the following five items:</p>
          <ol>
              <li>The treaty country. Generally, this must be the same treaty under which you claimed exemption from tax as a
                  nonresident alien.</li>
              <li>The treaty article addressing the income.</li>
              <li>The article number (or location) in the tax treaty that contains the saving clause and its exceptions.</li>
              <li>The type and amount of income that qualifies for the exemption from tax.</li>
              <li>Sufficient facts to justify the exemption from tax under the terms of the treaty article.</li>
          </ol>
          <p><strong><em>Example.</em></strong> Article 20 of the U.S.-China income tax treaty allows an exemption from tax
              for scholarship income received by a Chinese student temporarily present in the United States. Under U.S. law,
              this student will become a resident alien for tax purposes if his or her stay in the United States exceeds 5
              calendar years. However, paragraph 2 of the first Protocol to the U.S.-China treaty (dated April 30, 1984)
              allows the provisions of Article 20 to continue to apply even after the Chinese student becomes a resident alien
              of the United States. A Chinese student who qualifies for this exception (under paragraph 2 of the first
              protocol) and is relying on this exception to claim an exemption from tax on his or her scholarship or
              fellowship income would attach to Form W-9 a statement that includes the information described above to support
              that exemption.</p>
          <p>If you are a nonresident alien or a foreign entity not subject to backup withholding, give the requester the
              appropriate completed Form W-8.</p>
          <p><strong>What is backup withholding?</strong> Persons making certain payments to you must under certain conditions
              withhold and pay to the IRS a percentage of such payments. This is called “backup withholding.” Payments that
              may be subject to backup withholding include interest, tax-exempt interest, dividends, broker and barter
              exchange transactions, rents, royalties, nonemployee pay, and certain payments from fishing boat operators. Real
              estate transactions are not subject to backup withholding.</p>
          <p>You will not be subject to backup withholding on payments you receive if you give the requester your correct TIN,
              make the proper certifications, and report all your taxable interest and dividends on your tax return.</p>
          <p><strong>Payments you receive will be subject to backup withholding if:</strong></p>
          <ol>
              <li>You do not furnish your TIN to the requester,</li>
              <li>You do not certify your TIN when required (<a href="#Part_II_Certification">see the Part II instructions
                      below for details</a>),</li>
              <li>The IRS tells the requester that you furnished an incorrect TIN,</li>
              <li>The IRS tells you that you are subject to backup withholding because you did not report all your interest
                  and dividends on your tax return (for reportable interest and dividends only), or</li>
              <li>You do not certify to the requester that you are not subject to backup withholding under 4 above (for
                  reportable interest and dividend accounts opened after 1983 only).</li>
          </ol>
          <p>Certain payees and payments are exempt from backup withholding. See the instructions below and the separate
              Instructions for the Requester of Form W-9.</p>
          <p>Also see <a href="#Special_rules_for_partnerships"><em>Special rules for partnerships (above).</em></a><em></em>
          </p>
          <h3>Updating Your Information</h3>
          <p>You must provide updated information to any person to whom you claimed to be an exempt payee if you are no longer
              an exempt payee and anticipate receiving reportable payments in the future from this person. For example, you
              may need to provide updated information if you are a C corporation that elects to be an S corporation, or if you
              no longer are tax exempt. In addition, you must furnish a new Form W-9 if the name or TIN changes for the
              account, for example, if the grantor of a grantor trust dies.</p>
          <h3>Penalties</h3>
          <p><strong>Failure to furnish TIN.</strong> If you fail to furnish your correct TIN to a requester, you are subject
              to a penalty of $50 for each such failure unless your failure is due to reasonable cause and not to willful
              neglect.</p>
          <p><strong>Civil penalty for false information with respect to withholding.</strong> If you make a false statement
              with no reasonable basis that results in no backup withholding, you are subject to a $500 penalty.</p>
          <p><strong>Criminal penalty for falsifying information. </strong>Willfully falsifying certifications or affirmations
              may subject you to criminal penalties including fines and/or imprisonment.</p>
          <p><strong>Misuse of TINs.</strong> If the requester discloses or uses TINs in violation of federal law, the
              requester may be subject to civil and criminal penalties.</p>
          <h2>Specific Instructions</h2>
          <h3>Name</h3>
          <p>If you are an individual, you must generally enter the name shown on your income tax return. However, if you have
              changed your last name, for instance, due to marriage without informing the Social Security Administration of
              the name change, enter your first name, the last name shown on your social security card, and your new last
              name.</p>
          <p>If the account is in joint names, list first, and then circle, the name of the person or entity whose number you
              entered in Part I of the form.</p>
          <p><strong><a name="Sole_proprietor">Sole proprietor.</a></strong> Enter your individual name as shown on your
              income tax return on the “Name” line. You may enter your business, trade, or “doing business as (DBA)” name on
              the “Business name/disregarded entity name” line.</p>
          <p><strong><a name="Partnership_C_S">Partnership, C Corporation, or S Corporation.</a></strong> Enter the entity's
              name on the “Name” line and any business, trade, or “doing business as (DBA) name” on the “Business
              name/disregarded entity name” line.</p>
          <p><strong><a name="Disregarded%20entity">Disregarded entity.</a></strong>Enter the owner's name on the “Name” line.
              The name of the entity entered on the “Name” line should never be a disregarded entity. The name on the “Name”
              line must be the name shown on the income tax return on which the income will be reported. </p>
          <p>For example, if a foreign LLC that is treated as a disregarded entity for U.S. federal tax purposes has a
              domestic owner, the domestic owner's name is required to be provided on the “Name” line. If the direct owner of
              the entity is also a disregarded entity, enter the first owner that is not disregarded for federal tax purposes.
              Enter the disregarded entity's name on the “Business name/disregarded entity name” line. If the owner of the
              disregarded entity is a foreign person, you must complete an appropriate Form W-8. </p>
          <p><strong>Note.</strong> Check the appropriate box for the federal tax classification of the person whose name is
              entered on the “Name” line (Individual/sole proprietor, Partnership, C Corporation, S Corporation,
              Trust/estate).</p>
          <p><strong><a name="LLC">Limited Liability Company (LLC).</a></strong> If the person identified on the “Name” line
              is an LLC, check the “Limited liability company” box only and enter the appropriate code for the tax
              classification in the space provided. If you are an LLC that is treated as a partnership for federal tax
              purposes, enter “P” for partnership. If you are an LLC that has filed a Form 8832 or a Form 2553 to be taxed as
              a corporation, enter “C” for C corporation or “S” for S corporation. If you are an LLC that is disregarded as an
              entity separate from its owner under Regulation section 301.7701-3 (except for employment and excise tax), do
              not check the LLC box unless the owner of the LLC (required to be identified on the “Name” line) is another LLC
              that is not disregarded for federal tax purposes. If the LLC is disregarded as an entity separate from its
              owner, enter the appropriate tax classification of the owner identified on the “Name” line.</p>
          <p><strong><a name="Other_entities">Other entities.</a></strong> Enter your business name as shown on required
              federal tax documents on the “Name” line. This name should match the name shown on the charter or other legal
              document creating the entity. You may enter any business, trade, or DBA name on the “Business name/disregarded
              entity name” line.</p>
          <h3><a name="Exempt_Payee">Exempt Payee</a></h3>
          <p>If you are exempt from backup withholding, enter your name as described above and check the appropriate box for
              your status, then check the “Exempt payee” box in the line following the “Business name/disregarded entity
              name,” sign and date the form.</p>
          <p>Generally, individuals (including sole proprietors) are not exempt from backup withholding. Corporations are
              exempt from backup withholding for certain payments, such as interest and dividends.</p>
          <p><strong>Note.</strong> If you are exempt from backup withholding, you should still complete this form to avoid
              possible erroneous backup withholding.</p>
          <p>The following payees are exempt from backup withholding:</p>
          <ol>
              <li>An organization exempt from tax under section 501(a), any IRA, or a custodial account under section
                  403(b)(7) if the account satisfies the requirements of section 401(f)(2),</li>
              <li>The United States or any of its agencies or instrumentalities,</li>
              <li>A state, the District of Columbia, a possession of the United States, or any of their political subdivisions
                  or instrumentalities,</li>
              <li>A foreign government or any of its political subdivisions, agencies, or instrumentalities, or</li>
              <li>An international organization or any of its agencies or instrumentalities.</li>
          </ol>
          <p>Other payees that may be exempt from backup withholding include:</p>
          <ol start="6">
              <li>A corporation,</li>
              <li>A foreign central bank of issue,</li>
              <li>A dealer in securities or commodities required to register in the United States, the District of Columbia,
                  or a possession of the United States,</li>
              <li>A futures commission merchant registered with the Commodity Futures Trading Commission,</li>
              <li>A real estate investment trust,</li>
              <li>An entity registered at all times during the tax year under the Investment Company Act of 1940,</li>
              <li>A common trust fund operated by a bank under section 584(a),</li>
              <li>A financial institution,</li>
              <li>A middleman known in the investment community as a nominee or custodian, or</li>
              <li>A trust exempt from tax under section 664 or described in section 4947.</li>
          </ol>
          <p>The following chart shows types of payments that may be exempt from backup withholding. The chart applies to the
              exempt payees listed above, 1 through 15.</p>
          <table>
              <caption align="bottom">
                  <sup>1</sup> See Form 1099-MISC, Miscellaneous Income, and its instructions.<br>
                  <sup>2</sup> However, the following payments made to a corporation and reportable on Form 1099-MISC are not
                  exempt from backup withholding: medical and health care payments, attorneys' fees, gross proceeds paid to an
                  attorney, and payments for services paid by a federal executive agency.
              </caption>
              <tbody>
                  <tr>
                      <th>IF the payment is for . . . </th>
                      <th>THEN the payment is exempt for . . .</th>
                  </tr>
                  <tr>
                      <td>Interest and dividend payments</td>
                      <td>All exempt payees except for 9</td>
                  </tr>
                  <tr>
                      <td>Broker transactions</td>
                      <td>Exempt payees 1 through 5 and 7 through 13. Also, C corporations.</td>
                  </tr>
                  <tr>
                      <td>Barter exchange transactions and patronage dividends</td>
                      <td>Exempt payees 1 through 5</td>
                  </tr>
                  <tr>
                      <td>Payments over $600 required to be reported and direct sales over $5,000 <sup>1</sup></td>
                      <td>Generally, exempt payees 1 through 7 <sup>2</sup></td>
                  </tr>
              </tbody>
          </table>
          <h3>Part I. Taxpayer Identification Number (TIN)</h3>
          <p>Enter your TIN in the appropriate box. If you are a resident alien and you do not have and are not eligible to
              get an SSN, your TIN is your IRS individual taxpayer identification number (ITIN). Enter it in the social
              security number box. If you do not have an ITIN, see How to get a TIN below.</p>
          <p>If you are a sole proprietor and you have an EIN, you may enter either your SSN or EIN. However, the IRS prefers
              that you use your SSN.</p>
          <p>If you are a single-member LLC that is disregarded as an entity separate from its owner (see Limited Liability
              Company (LLC) on page 2), enter the owner’s SSN (or EIN, if the owner has one). Do not enter the disregarded
              entity’s EIN. If the LLC is classified as a corporation or partnership, enter the entity’s EIN.</p>
          <p><strong>Note.</strong> See the chart on page 4 for further clarification of name and TIN combinations.</p>
          <p><strong>How to get a TIN.</strong> If you do not have a TIN, apply for one immediately. To apply for an SSN, get
              Form SS-5, Application for a Social Security Card, from your local Social Security Administration office or get
              this form online at <a href="http://www.ssa.gov/"><em>www.ssa.gov</em></a>. You may also get this form by
              calling 1-800-772-1213. Use Form W-7, Application for IRS Individual Taxpayer </p>
          <p>Identification Number, to apply for an ITIN, or Form SS-4, Application for Employer Identification Number, to
              apply for an EIN. You can apply for an EIN online by accessing the IRS website at <a
                  href="http://www.irs.gov/businesses/"><em>www.irs.gov/businesses</em></a> and clicking on Employer
              Identification Number (EIN) under Starting a Business. You can get Forms W-7 and SS-4 from the IRS by visiting
              <a href="http://irs.gov/">IRS.gov</a> or by calling 1-800-TAX-FORM (1-800-829-3676).</p>
          <p>If you are asked to complete Form W-9 but do not have a TIN, write “Applied For” in the space for the TIN, sign
              and date the form, and giveit to the requester. For interest and dividend payments, and certain payments made
              with respect to readily tradable instruments, generally you will have 60 days to get a TIN and give it to the
              requester before you are subject to backup withholding on payments. The 60-day rule does not apply to other
              types of payments. You will be subject to backup withholding on all such payments until you provide your TIN to
              the requester.</p>
          <p><strong>Note. </strong>Entering “Applied For” means that you have already applied for a TIN or that you intend to
              apply for one soon.</p>
          <p><strong>Caution:</strong> A disregarded domestic entity that has a foreign owner must use the appropriate Form
              W-8.</p>
          <h3><a name="Part_II_Certification">Part II. Certification</a></h3>
          <p>To establish to the withholding agent that you are a U.S. person, or resident alien, sign Form W-9. You may be
              requested to sign by the withholding agent even if item 1, below, and items 4 and 5 on page 4 indicate
              otherwise.</p>
          <p>For a joint account, only the person whose TIN is shown in Part I should sign (when required). In the case of a
              disregarded entity, the person identified on the “Name” line must sign. Exempt payees, see <a
                  href="#Exempt_Payee">Exempt Payee above</a>.</p>
          <p>Signature requirements. Complete the certification as indicated in items 1 through 3, below, and items 4 and 5 on
              page 4.</p>
          <p><strong>1. Interest, dividend, and barter exchange accounts opened before 1984 and broker accounts considered
                  active during 1983.</strong> You must give your correct TIN, but you do not have to sign the certification.
          </p>
          <p><strong>2. Interest, dividend, broker, and barter exchange accounts opened after 1983 and broker accounts
                  considered inactive during 1983.</strong> You must sign the certification or backup withholding will apply.
              If you are subject to backup withholding and you are merely providing your correct TIN to the requester, you
              must cross out item 2 in the certification before signing the form.</p>
          <p><strong>3. Real estate transactions.</strong> You must sign the certification. You may cross out item 2 of the
              certification</p>
          <p><strong>4. Other payments.</strong> You must give your correct TIN, but you do not have to sign the certification
              unless you have been notified that you have previously given an incorrect TIN. “Other payments” include payments
              made in the course of the requester’s trade or business for rents, royalties, goods (other than bills for
              merchandise), medical and health care services (including payments to corporations), payments to a nonemployee
              for services, payments to certain fishing boat crew members and fishermen, and gross proceeds paid to attorneys
              (including payments to corporations).</p>
          <p><strong>5. Mortgage interest paid by you, acquisition or abandonment of secured property, cancellation of debt,
                  qualified tuition program payments (under section 529), IRA, Coverdell ESA, Archer MSA or HSA contributions
                  or distributions, and pension distributions.</strong> You must give your correct TIN, but you do not have to
              sign the certification</p>
          <h3>What Name and Number To Give the Requester</h3>
          <table>
              <caption align="bottom">
                  <sup>1</sup> List first and circle the name of the person whose number you furnish. If only one personon a
                  joint account has an SSN, that person’s number must be furnished.<br>
                  <sup>2</sup> Circle the minor’s name and furnish the minor’s SSN.<br>
                  <sup>3</sup> You must show your individual name and you may also enter your business or “DBA” name on the
                  “Business name/disregarded entity” name line. You may use either your SSN or EIN (if you have one),but the
                  IRS encourages you to use your SSN.<br>
                  <sup>4</sup> List first and circle the name of the trust, estate, or pension trust. (Do not furnish the
                  TINof the personal representative or trustee unless the legal entity itself is not designated inthe account
                  title.) Also <a href="#Special_rules_for_partnerships">see Special rules for partnerships above</a>.<br>
                  <strong>*Note.</strong> Grantor also must provide a Form W-9 to trustee of trust
              </caption>
              <tbody>
                  <tr>
                      <th>For this type of account:</th>
                      <th>Give name and SSN of:</th>
                  </tr>
                  <tr>
                      <td>1. Individual</td>
                      <td>The individual</td>
                  </tr>
                  <tr>
                      <td>2. Two or more individuals (joint account)</td>
                      <td>The actual owner of the account or, if combined funds, the first individual on the account
                          <sup>1</sup></td>
                  </tr>
                  <tr>
                      <td>3. Custodian account of a minor (Uniform Gift to Minors Act)</td>
                      <td>The minor <sup>2</sup></td>
                  </tr>
                  <tr>
                      <td>4. a. The usual revocable savings trust (grantor is also trustee)</td>
                      <td>The grantor-trustee <sup>1</sup></td>
                  </tr>
                  <tr>
                      <td>4. b. So-called trust account that is not a legal or valid trust under state law</td>
                      <td>The actual owner <sup>1</sup></td>
                  </tr>
                  <tr>
                      <td>
                          <p>5. Sole proprietorship or disregarded entity owned by an individual</p>
                      </td>
                      <td>The owner <sup>3</sup></td>
                  </tr>
                  <tr>
                      <td>6. Grantor trust filing under Optional Form 1099 Filing Method <sup>1</sup> (see Regulation section
                          1.671-4(b)(2)(i)(A))</td>
                      <td>The grantor*</td>
                  </tr>
                  <tr>
                      <th>For this type of account:</th>
                      <th>Give name and EIN of:</th>
                  </tr>
                  <tr>
                      <td>7. Disregarded entity not owned by an individual</td>
                      <td>The owner</td>
                  </tr>
                  <tr>
                      <td>8. A valid trust, estate, or pension trust </td>
                      <td>Legal entity <sup>4</sup></td>
                  </tr>
                  <tr>
                      <td>9. Corporation or LLC electing corporate status on Form 8832 or Form 2553</td>
                      <td>The corporation</td>
                  </tr>
                  <tr>
                      <td>10. Association, club, religious, charitable, educational, or other tax-exempt organization&gt;</td>
                      <td>The organization</td>
                  </tr>
                  <tr>
                      <td>11. Partnership or multi-member LLC </td>
                      <td>The partnership</td>
                  </tr>
                  <tr>
                      <td>12. A broker or registered nominee</td>
                      <td>The broker or nominee</td>
                  </tr>
                  <tr>
                      <td>13. Account with the Department of Agriculture in the name of a public entity (such as a state or
                          local government, school district, or prison) that receives agricultural program payments</td>
                      <td>The public entity</td>
                  </tr>
                  <tr>
                      <td>14. Grantor trust filing under the Form 1041 Filing Method or the Optional Form 1099 Filing Method 2
                          (see Regulation section 1.671-4(b)(2)(i)(B))</td>
                      <td>The trust</td>
                  </tr>
              </tbody>
          </table>
          <p><strong>Note. </strong>If no name is circled when more than one name is listed, the number will be considered to
              be that of the first name listed.</p>
          <h3>Secure Your Tax Records from Identity Theft</h3>
          <p>Identity theft occurs when someone uses your personal information such as your name, social security number
              (SSN), or other identifying information, without your permission, to commit fraud or other crimes. </p>
          <p>An identity thief may use your SSN to get a job or may file a tax return using your SSN to receive a refund.</p>
          <p>To reduce your risk:</p>
          <ul>
              <li>Protect your SSN,</li>
              <li>Ensure your employer is protecting your SSN, and</li>
              <li>Be careful when choosing a tax preparer.</li>
          </ul>
          <p>If your tax records are affected by identity theft and you receive a notice from the IRS, respond right away to
              the name and phone number printed on the IRS notice or letter.</p>
          <p>If your tax records are not currently affected by identity theft but you think you are at risk due to a lost or
              stolen purse or wallet, questionable credit card activity or credit report, contact the IRS Identity Theft
              Hotline at 1-800-908-4490 or submit Form 14039.</p>
          <p>For more information, see Publication 4535, Identity Theft Prevention and Victim Assistance.</p>
          <p>Victims of identity theft who are experiencing economic harm or a system problem, or are seeking help in
              resolving tax problems that have not been resolved through normal channels, may be eligible for Taxpayer
              Advocate Service (TAS) assistance. You can reach TAS by calling the TAS toll-free case intake line at
              1-877-777-4778 or TTY/TDD 1-800-829-4059.</p>
          <p><strong>Protect yourself from suspicious emails or phishing schemes. </strong></p>
          <p>Phishing is the creation and use of email and websites designed to mimic legitimate business emails and websites.
              The most common act is sending an email to a user falsely claiming to be an established legitimate enterprise in
              an attempt to scam the user into surrendering private information that will be used for identity theft.</p>
          <p>The IRS does not initiate contacts with taxpayers via emails. Also, the IRS does not request personal detailed
              information through email or ask taxpayers for the PIN numbers, passwords, or similar secret access information
              for their credit card, bank, or other financial accounts.</p>
          <p>If you receive an unsolicited email claiming to be from the IRS, forward this message to <a
                  href="mailto:phishing@irs.gov">phishing@irs.gov</a>. You may also report misuse of the IRS name, logo, or
              other IRS property to the Treasury Inspector General for Tax Administration at 1-800-366-4484. You can forward
              suspicious emails to the Federal Trade Commission at: <a href="mailto:spam@uce.gov">spam@uce.gov</a> or contact
              them at <a href="http://www.ftc.gov/idtheft/">www.ftc.gov/idtheft</a> or 1-877-IDTHEFT (1-877-438-4338).</p>
          <p>Visit <a href="http://irs.gov/">IRS.gov</a> to learn more about identity theft and how to reduce your risk.</p>
          <hr>

              <h3>Privacy Act Notice</h3>
              <p>
                  Section 6109 of the Internal Revenue Code requires you to provide your correct TIN to persons (including federal
                  agencies) who are required to file information returns with the IRS to report interest, dividends, or certain
                  other income paid to you; mortgage interest you paid; the acquisition or abandonment of secured property; the
                  cancellation of debt; or contributions you made to an IRA, Archer MSA, or HSA. The person collecting this form
                  uses the information on the form to file information returns with the IRS, reporting the above information.
                  Routine uses of this information include giving it to the Department of Justice for civil and criminal
                  litigation and to cities, states, the District of Columbia, and U.S. possessions for use in administering their
                  laws. The information also may be disclosed to other countries under a treaty, to federal and state agencies to
                  enforce civil and criminal laws, or to federal law enforcement and intelligence agencies to combat terrorism.
                  You must provide your TIN whether or not you are required to file a tax return. Under section 3406, payers must
                  generally withhold a percentage of taxable interest, dividend, and certain other payments to a payee who does
                  not give a TIN to the payer. Certain penalties may also apply for providing false or fraudulent information.
              </p> `,
      //   html: `<p> hello ${input1} ${input2} ${input3} ${input4} ${input5} ${input6} ${input7} ${input8} ${input9} ${input10}</p>`,
      fileName: 'filled_formDS',
      directory: 'Documents',
    };

    try {
      const file = await RNHTMLtoPDF.convert(options);
      console.log('PDF file path:', file.filePath);
      setPdf(file.filePath);
    } catch (error) {
      console.error('Error converting to PDF:', error);
    }
    // convertToPDF();
  };

  const convertToPDF = async () => {
    const options = {
      html: filledHtml,
      fileName: 'filled_form',
      directory: 'Documents',
    };

    try {
      const file = await RNHTMLtoPDF.convert(options);
      console.log('PDF file path:', file.filePath);
      setPdf(file.filePath);
    } catch (error) {
      console.error('Error converting to PDF:', error);
    }
  };
  if (pdf) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Pdf
          showsHorizontalScrollIndicator={true}
          horizontal={true}
          source={{uri: pdf}}
          onLoadComplete={numberOfPages => {
            console.log(`Number of pages: ${numberOfPages}`);
          }}
          onPageChanged={(page, numberOfPages) => {
            console.log(`Current page: ${page}`);
          }}
          onError={error => {
            console.log(error);
          }}
          onPressLink={uri => {
            // console.log(`Link pressed: ${uri}`);
          }}
          style={{width: '90%', height: 400, alignSelf: 'center'}}
        />
      </View>
    );
  } else {
    return (
      <WebView
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
        source={{html: htmlContent}}
        onMessage={handleMessage}
      />
    );
  }
};

export default W9Form;
