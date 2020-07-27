const mongoose = require('mongoose')
const Tag = require('./Tag')

let postSchema = mongoose.Schema(
	{
		title: String,
		description: String,
		author: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		},
		comments: [
			{
				author: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'User'
				},
				text: String
			}
		],
		tags: [
			{
				type:mongoose.Schema.Types.ObjectId,
				ref: 'Tag'
			}
		]
	}
)