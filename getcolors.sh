#!/bin/bash
if [ ! -z $1 ]; then
  cp $1/.metadata/.plugins/org.eclipse.core.runtime/.settings/org.eclipse.jdt.ui.prefs .
  cp $1/.metadata/.plugins/org.eclipse.core.runtime/.settings/org.eclipse.ui.editors.prefs .
  cp $1/.metadata/.plugins/org.eclipse.core.runtime/.settings/org.eclipse.wst.jsdt.ui.prefs .
fi
