package io.ionic.starter;
import ch.byrds.capacitor.contacts.Contacts;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {}

this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
  // Additional plugins you've installed go here
  // Ex: add(TotallyAwesomePlugin.class);
  add(Contacts.class);
}});
