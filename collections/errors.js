if(Meteor.isClient){
  // Local (client-only) collection
  Errors = new Meteor.Collection(null);
}
throwError = function(message, type){
  type = (typeof type === 'undefined') ? 'error': type;
  // Store errors in the 'Errors' local collection
  if(message.valueOf()!=new String("Internal server error").valueOf())
  	Errors.insert({message:message, type:type, seen: false, show:true});
}
